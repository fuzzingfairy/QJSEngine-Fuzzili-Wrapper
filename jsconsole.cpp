#include "jsconsole.h"
#include <QDebug>


JSConsole::JSConsole(QObject *parent) :
    QObject(parent)
{
}

void JSConsole::log(QString msg)
{
    qDebug() << "jsConsole: "<< msg;
    //*((int*)0x41414141) = 0x1337;
}
/*
class SegFault : public QObject
{
public:
    Q_INVOKABLE SegFault(){};

    Q_INVOKABLE void fault(){
	std::cout << "here";
    };

};
*/
