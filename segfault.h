#include <QApplication>
#include <QLabel>
#include <QWidget>
#include <QJSEngine>
#include <iostream>

class SegFault : public QObject
{
    Q_OBJECT

public:
    Q_INVOKABLE SegFault(){
    };
    virtual ~SegFault(){
	    //destruct
    };
    Q_INVOKABLE void fault(){
	std::cout << "shoulda segfaulted";
	*((int*)0x41414141) = 0x1337;
    };

};
