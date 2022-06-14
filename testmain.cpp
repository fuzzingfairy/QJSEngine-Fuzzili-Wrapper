#include <QApplication>
#include <QLabel>
#include <QWidget>
#include <QJSEngine>
#include <iostream>
#include <QDebug>
#include <sys/mman.h>
#include <unistd.h>
#include <sys/stat.h> /* For mode constants */
#include <fcntl.h>    /* For O_* constants */
#include <string>
#include <stdint.h>
#include <segfault.h>

#include <QDebug>

#define REPRL_CRFD 100
#define REPRL_CWFD 101
#define REPRL_DRFD 102
#define REPRL_DWFD 103
#include <QCoreApplication>
#include <QJSEngine>

void __sanitizer_cov_reset_edgeguards();

// libfuzzer test for QJSEngine::evaluate()

/*
extern "C" int LLVMFuzzerTestOneInput(const char *Data, size_t Size)
{
    const QByteArray ba = QByteArray::fromRawData(Data, Size);
    // avoid potential endless loops
    if (ba.contains("for") || ba.contains("while"))
        return 1;
    int c = 0;
    QCoreApplication a(c, nullptr);
    QJSEngine().evaluate(ba);
    return 0;
}
*/


int main(int argc, char *argv[])
{
    bool doReprl = false;
    for (int i = 1; i < argc; i++)
    {
        if (strcmp(argv[i], "-reprl") == 0)
        {
            doReprl = true;
        }
    }

    if (doReprl)
    {
        // init app
        QApplication app(argc, argv);
        char hello[] = "HELO";
        write(REPRL_CWFD, hello, sizeof(hello));

        char buffer[4];
        read(REPRL_CRFD, buffer, sizeof(buffer));

        if (strcmp(buffer, hello) != 0)
        {
            // exit(-1);
        }
        // FIXME: possibly implement mmap speed optimization

        while (true)
        {

            // init engine
            QJSEngine myEngine;
	    // install console extension
            //myEngine.installExtensions(QJSEngine::ConsoleExtension);

            
	    // create a newQMetaObject
            //QJSValue jsMetaObject = myEngine.newQMetaObject(&SegFault::staticMetaObject);
	    // make newQMetaObject accessible to javascript via global object
            //myEngine.globalObject().setProperty("Segfault", jsMetaObject); // FIXME: could this be because we arent correctly referencing the global object in our evaluation

	    // make a segfault object
	    QObject *instance = new SegFault;
	    // turn it into a javascript object
	    QJSValue segvalue = myEngine.newQObject(instance);
	    // make it accessible via the global property
	    myEngine.globalObject().setProperty("SegFault", segvalue);

	    // trigger a segfault
            QJSValue segfault = myEngine.evaluate("print(SegFault.fault());");


            QJSValue fun = myEngine.evaluate("(function(a) { if (a === 'FUZZILI_CRASH') { new Segfault()}  })");
            myEngine.globalObject().setProperty("fuzzili", fun);
            std::cout << segfault.isError();
            myEngine.evaluate("print(1 + 3)");
            read(REPRL_CRFD, &buffer, sizeof(buffer));
            char cexe[5] = "cexe";
            if (strcmp(buffer, cexe) != 0)
            {
                fprintf(stderr, "cexe not present in REPRL_CRFD\n");
                break;
            }
            // get size of fuzzed js byte array
            int64_t size;
            // read size
            read(REPRL_CRFD, &size, 8);
            // initialize fuzzed js byte array
            char *input = (char *)malloc(size + 1);
            // TODO if mmap then read from mmap io
            read(REPRL_DRFD, input, sizeof(input));

            // convert input into a raw byte array
            const QByteArray ba = QByteArray::fromRawData(input, sizeof(input));

            // evaluate byte array
            QJSValue result = myEngine.evaluate(ba);
            int status = 0;
            if (result.isError())
            {
                fprintf(stderr, "Failed to evaluate byte array reprl\n");
                status = 1;
            }

            // flush stderr, stdout
            fflush(stderr);
            fflush(stdout);
            // bitmask with 0xff
            status = (status & 0XFF) << 8;
            // write our error code
            if (write(REPRL_CWFD, &status, 4) != 4)
                exit(1);
            // collect garbage
            myEngine.collectGarbage();
            // destroy engine
            myEngine.~QJSEngine();
            // reset coverage guards
            __sanitizer_cov_reset_edgeguards();
        }

        return app.exec();
    }
}

#define SHM_SIZE 0x100000
#define MAX_EDGES ((SHM_SIZE - 4) * 8)

#define CHECK(cond)                                \
    if (!(cond))                                   \
    {                                              \
        fprintf(stderr, "\"" #cond "\" failed\n"); \
        _exit(-1);                                 \
    }

struct shmem_data
{
    uint32_t num_edges;
    unsigned char edges[];
};

struct shmem_data *__shmem;
uint32_t *__edges_start, *__edges_stop;

void __sanitizer_cov_reset_edgeguards()
{
    uint64_t N = 0;
    for (uint32_t *x = __edges_start; x < __edges_stop && N < MAX_EDGES; x++)
        *x = ++N;
}

extern "C" void __sanitizer_cov_trace_pc_guard_init(uint32_t *start, uint32_t *stop)
{
    // Avoid duplicate initialization
    if (start == stop || *start)
        return;

    if (__edges_start != NULL || __edges_stop != NULL)
    {
        fprintf(stderr, "Coverage instrumentation is only supported for a single module\n");
        _exit(-1);
    }

    __edges_start = start;
    __edges_stop = stop;

    // Map the shared memory region
    const char *shm_key = getenv("SHM_ID");
    if (!shm_key)
    {
        puts("[COV] no shared memory bitmap available, skipping");
        __shmem = (struct shmem_data *)malloc(SHM_SIZE);
    }
    else
    {
        int fd = shm_open(shm_key, O_RDWR, S_IREAD | S_IWRITE);
        if (fd <= -1)
        {
            fprintf(stderr, "Failed to open shared memory region: %s\n", strerror(errno));
            _exit(-1);
        }

        __shmem = (struct shmem_data *)mmap(0, SHM_SIZE, PROT_READ | PROT_WRITE, MAP_SHARED, fd, 0);
        if (__shmem == MAP_FAILED)
        {
            fprintf(stderr, "Failed to mmap shared memory region\n");
            _exit(-1);
        }
    }

    __sanitizer_cov_reset_edgeguards();

    __shmem->num_edges = stop - start;
    printf("[COV] edge counters initialized. Shared memory: %s with %u edges\n", shm_key, __shmem->num_edges);
}

extern "C" void __sanitizer_cov_trace_pc_guard(uint32_t *guard)
{
    // There's a small race condition here: if this function executes in two threads for the same
    // edge at the same time, the first thread might disable the edge (by setting the guard to zero)
    // before the second thread fetches the guard value (and thus the index). However, our
    // instrumentation ignores the first edge (see libcoverage.c) and so the race is unproblematic.
    uint32_t index = *guard;
    // If this function is called before coverage instrumentation is properly initialized we want to return early.
    if (!index)
        return;
    __shmem->edges[index / 8] |= 1 << (index % 8);
    *guard = 0;
}
