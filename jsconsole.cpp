#include "jsconsole.h"
#include <QDebug>


JSConsole::JSConsole(QObject *parent) :
    QObject(parent)
{
}

void JSConsole::log(QString msg)
{
    qDebug() << "jsConsole: "<< msg;
}