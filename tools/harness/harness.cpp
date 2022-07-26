#include <QJSEngine>
#include <iostream>
#include <QDebug>
#include <sys/mman.h>
#include <unistd.h>
#include <sys/stat.h> /* For mode constants */
#include <fcntl.h>    /* For O_* constants */
#include <string>
#include <stdint.h>
#include <stdio.h>
#include <stdio.h>
#include <stdlib.h>

#include <QDebug>
#define REPRL_CRFD 100
#define REPRL_CWFD 101
#define REPRL_DRFD 102
#define REPRL_DWFD 103
#include <QCoreApplication>
#include <QJSEngine>


// FIXME: add the emojis to output/logging like mutiny ^.^
int main(int argc, char *argv[])
{
    QCoreApplication app(argc, argv);

    if (argc != 2){
	    std::cout << "invalid number of parameters\n";
	    std::cout << "usage: ./harness <input script file>\n";
    }

    // initialize the application and its js engine
    QJSEngine engine;

    engine.installExtensions(QJSEngine::ConsoleExtension);
    // getting the script from the input file
    size_t script_size;
    char* filename = argv[1];
    FILE* file = fopen(filename, "r");
    fseek(file, 0, SEEK_END); // seek to end of file
    script_size = ftell(file); // get current file pointer
    fseek(file, 0, SEEK_SET); // seek back to beginning of file
    char *script_src = (char *)(malloc(script_size + 1));
    FILE* file1 = fopen(filename, "r");
    int fd = fileno(file1);
    read(fd, script_src, script_size);

    // add null terminator
    script_src[script_size] = '\0';


    std::cout << "\n\n[INFO] Input: ";
    std::cout << script_src;
    QStringList* exceptions = new QStringList();
    // evaluate byte array
    QJSValue result = engine.evaluate(script_src, NULL, 1, exceptions);

    if (result.isError() || engine.hasError() || !exceptions->isEmpty()) {
	    std::cout << "\n\n[ERROR] Exception Occured:\nresult: ";
	    std::cout << result.toString().toStdString();
	    std::cout << "\nexceptions: ";
	    QString str_exceptions = exceptions->join("\n");
	    std::cout << str_exceptions.toStdString();
    }
    std::cout << "\n\n[INFO] Result: ";
    std::cout << result.toString().toStdString();

    free(script_src);

return app.exec();
}


