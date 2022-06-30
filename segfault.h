#include <QApplication>
#include <QLabel>
#include <QWidget>
#include <QJSEngine>
#include <iostream>
#include <stdio.h>
#include <unistd.h>
#include <string.h>


#define REPRL_DWFD 103

class SegFault : public QObject
{
    Q_OBJECT

public:
    Q_INVOKABLE SegFault(){};
    virtual ~SegFault(){
        // destruct
    };
    Q_INVOKABLE void fault()
    {
        std::cout << "shoulda segfaulted";
        *((int *)0x41414141) = 0x1337;
    };

    Q_INVOKABLE void print(QString msg)
    {
        std::string s = msg.toStdString();
        const char *print_str = s.c_str(); 
        char * mod_str = strdup(print_str);
        strncat(mod_str,"\n",1);
        write(REPRL_DWFD, mod_str, strlen(mod_str));
        free(mod_str);
    }
};
