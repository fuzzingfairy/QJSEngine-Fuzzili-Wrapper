# QJS-Eval-Documentation
Documentation for Summer 2022 Qt-QJSEngine Evaluation

### RoomOS Usage
QJSEngine is used by RoomOS to execute PAC files. Proxy Auto-Configuration (PAC) is a method used by Web browsers to select a proxy for a given URL. The method for choosing a proxy is written as a JavaScript function contained in a PAC file. This file can be hosted locally or on a network.

The javascript within these PAC files is parsed and executed by QJSEngine. Though the general use prescribes for a web-server maintained by an administrator to host a centralized version of the PAC file, it is also possible to setup a DHCP server within the victim's LAN to advertise malicious PAC files via WPAD.

### Resources
Target Resources
- [Target Class Docs](https://doc.qt.io/qt-5/qjsengine.html)
- [Target Class Code](https://github.com/qt/qtdeclarative/blob/dev/src/qml/jsapi/qjsengine.cpp)
- [Qt Quick Conceptual Overview](https://wiki.qt.io/Introduction_to_Qt_Quick)
- [The QML Book](https://qmlbook.github.io/)
- [Qt5 Docs](https://doc.qt.io/qt-5/)
- [JIT Optimization Configs](https://doc.qt.io/qt-5/qtqml-javascript-finetuning.html)
- [QObject Docs](https://doc.qt.io/qt-5/qobject.html)
- [Qt V4 Engine Docs](https://wiki.qt.io/V4)
- [Javascript Hidden Types](https://draft.li/blog/2016/12/22/javascript-engines-hidden-classes/)

Fuzzer Resources
- [Fuzzilli](https://github.com/googleprojectzero/fuzzilli)
- [Fuzzilli Dev Fork](https://github.com/theo-morales/fuzzilli)
- [Crashwalk](https://github.com/bnagy/crashwalk)

### TODO

- [X] get jerryscript fuzzilli target working
- [ ] Create Fuzzili QJSEngine Target (Submit PR to github)
    - [X] Compilation Changes
    - [X] Code Coverage
    - [X] Adding Read-Eval-Print-Reset-Loop
    - [X] Adding Custom "fuzzilli" Javascript Builtin
    - [X] Create Fuzzilli Profile
    - [X] create and apply patch on the jsshell
        - [ ] (optional) mmap optimization for reading within reprl
        - [X] implement FUZZILLI_PRINT
    - [X] figure out which executale is gonna be jsshell... is it qjsengine? update the full path in this readme and future fuzzili commands
- [X] Fuzz 
- [X] Convert notes to markdown -> clean and make into report
- [X] Setup local QT5 engines, spend some time playing with it 
- [x] List functions by priority for fuzzing

## Engine Overview

#### QML 
QML is the C++ language/runtime that allows for a declarative user-interface programming experience based around javascript. It is designed to be used to describe both how the interface looks like and how it behaves.


#### Qt Quick 
Qt Quick refers to the library of components that do the heavy lifting for QML programs. Most of it is written in C++ and our target module, QJSEngine, is responsible for providing the javascript engine functionality


#### QJSEngine
QJSEngine is a C++ class belonging to QT Quick which provides a javascript engine to the QML runtime

Inherits: QObject


## Function Fuzzing Priority List
	        
`evaluate(const QString &program, const QString &fileName = QString(), int lineNumber = 1)`

- Evaluates program, using lineNumber as the base line number, and returns the result of the evaluation
- If an exception is thrown, it will be returned in the QJSValue and can be verified using QJSValue::isError()
- The QJSValue class provides us with the ability to convert the result to a c++ type
- QJSValue::Call(), gives us a way to execute a slot
- **returns**: QJSValue
	
`importModule(const QString &fileName)`

- Imports the module located at filename and returns an object containing its properties and functions
- If it’s the first time its imported, it is evaluated as an ECMAScript module
- Expects UTF-8 text
- Modules should be singletons
- **returns**: QJSValue
	
`setUiLanguage(const QString &language)`

- Sets the language(an extension of the object) to be used for translating ui strings

`fromScriptValue(const QJSValue &value)`

- Converts a qjsvalue to a c++ T type
- Inverse of toScriptValue()
- **returns**: T
	
`toScriptValue(const T &value)`

- Inverse of fromScriptValue
- Converts a c++ type to a javascript object
- **returns**: T
    
`newQMetaObject(const QMetaObject *metaObject)`

- Creates a javascript object that wraps a given QMetaObject(object containing QT metadata)
- metaObject must outlive the script engine
- Recommended to only use with static metaobjects
- **returns**: QJSValue

`QJSEngine(QObject *parent)`

- Scripting engine object
- Its properties are global to the javascript it is parsing, as such, a javascript input can change the configuration of the engine to some degree
- **returns**: QJSEngine\*

`globalObject() const`

- Global engine object that contains properties we can reference and modify from within both the api and the parsed javascript
- **returns**: QJSValue

`collectGarbage()`

- Runs the garbage collector, though apparently QJSEngine does a bit of memory management on its own

`newArray(uint length = 0)`

- Creates a javascript array of length size
- **returns**: QJSValue

`newErrorObject(QJSValue::ErrorType errorType, const QString &message = QString())`

- Creates a javascript error object
- **returns**: QJSValue

`installExtensions(QJSEngine::Extensions extensions, const QJSValue &object = QJSValue())`

- Install javascript extensions to add functionality over the ECMAScript, installed on the given object or the global object if none is specified

`newObject()`

- Creates a javascript object 
- **returns**: QJSValue

`isInterrupted() const`

- shows interuption status of engine execution
- **returns**: bool 

`setInterrupted(bool interrupted)`

- Interrupts or re-enables javascript execution

`throwError(const QString &message)`

- Throws a run-time error with the given message

`~QJSEngine() override`

- Destroys this Engine

`uiLanguage() const`

- property that stores the language used for translating ui strings
- **returns**: QString


## Fuzzing

### Creating the Fuzzilli Target
By following the instructions in the fuzzilli repository, we were able to create a patch to the engine and a fuzzilli profile that allows fuzzili to create javascript bytecode for execution in the QJSEngine and access exit codes

### Environment Setup
Details:
- OS: Ubuntu 20.04
- Qt: 5.12.12

#### Installing Qt

`$  sudo apt-get install -- bison build-essential flex gperf libasound2-dev libatkmm-1.6-dev libbz2-dev libcap-dev libcups2-dev libdrm-dev libegl1-mesa-dev libfontconfig1-dev libfreetype6-dev libglu1-mesa-dev libicu-dev libnss3-dev libpci-dev libpulse-dev libssl-dev libudev-dev libx11-dev libx11-xcb-dev libxcb-composite0 libxcb-composite0-dev libxcb-cursor-dev libxcb-cursor0 libxcb-damage0 libxcb-damage0-dev libxcb-dpms0 libxcb-dpms0-dev libxcb-dri2-0 libxcb-dri2-0-dev libxcb-dri3-0 libxcb-dri3-dev libxcb-ewmh-dev libxcb-ewmh2 libxcb-glx0 libxcb-glx0-dev libxcb-icccm4 libxcb-icccm4-dev libxcb-image0 libxcb-image0-dev libxcb-keysyms1 libxcb-keysyms1-dev libxcb-present-dev libxcb-present0 libxcb-randr0 libxcb-randr0-dev libxcb-record0 libxcb-record0-dev libxcb-render-util0 libxcb-render-util0-dev libxcb-render0 libxcb-render0-dev libxcb-res0 libxcb-res0-dev libxcb-screensaver0 libxcb-screensaver0-dev libxcb-shape0 libxcb-shape0-dev libxcb-shm0 libxcb-shm0-dev libxcb-sync-dev libxcb-sync0-dev libxcb-sync1 libxcb-util-dev libxcb-util0-dev libxcb-util1 libxcb-xf86dri0 libxcb-xf86dri0-dev libxcb-xfixes0 libxcb-xfixes0-dev libxcb-xinerama0 libxcb-xinerama0-dev libxcb-xkb-dev libxcb-xkb1 libxcb-xtest0 libxcb-xtest0-dev libxcb-xv0 libxcb-xv0-dev libxcb-xvmc0 libxcb-xvmc0-dev libxcb1 libxcb1-dev libxcomposite-dev libxcursor-dev libxdamage-dev libxext-dev libxfixes-dev libxi-dev libxrandr-dev libxrender-dev libxslt-dev libxss-dev libxtst-dev perl python ruby`

`$ wget https://download.qt.io/official_releases/qt/5.12/5.12.12/single/qt-everywhere-src-5.12.12.tar.xz`

`$ wget https://download.qt.io/official_releases/qt/5.12/5.12.12/single/md5sums.txt && md5sum qt-everywhere-src-5.12.12.tar.xz && cat md5sums.txt`

`$ xz -d -v qt-everywhere-src-5.12.12.tar.xz`

`$ tar -xvf qt-everywhere-src-5.12.12.tar`

`$ cd qt-everywhere-src-5.12.12.tar.xz && ./configure` 

`$ make -j<n> #where n is cpu cores-1 -d`

#### Installing Swift

`$ wget https://download.swift.org/swift-5.6.1-release/ubuntu2004/swift-5.6.1-RELEASE/swift-5.6.1-RELEASE-ubuntu20.04.tar.gz`
`$ tar -xvf swift-*-RELEASE-ubuntu20.04.tar.gz`

### Deploying the Fuzzer
`$ ./swift-5.6.1-RELEASE-ubuntu20.04/usr/bin/swift build -c debug`

`$ ../swift-5.6.1-RELEASE-ubuntu20.04/usr/bin/swift run -c debug FuzzilliCli ---storagePath=../results -profile=qtjs  /path/to/jsshell`


## Examining Crashes
After running fuzzilli, it generates a `./results` directory which contains a `crashes/` subdir. Inside this subdir are a protobuf and js file for each crash. By using [crashwalk](https://github.com/bnagy/crashwalk), we were able to get some automated insight into whether or not the crashes were likely to be exploitable using 

`$ cwtriage -root <crash/subdir/path> <harness/path> @@`

and compiling into a single human readable output file using 

`$ cwdump crashwalk.db > triage.txt`

After creating the triage.txt file, we created a python script (`instrumentation/results/parser.py`) that creates three seperate directories:
- exploitable/
- not-exploitable/
- prob-exploitable/
- unknown/

each containing their own trimmed version of the triage and the crash files for the respective category

For the exploitable/ directory, we manually debugged each js script using gdb to further subdivide by issue type

In order to manually debug and have symbols available to us, qt must be built and the produced qmake must be used to build the harness from its working directory 

`$ /path/to/qt-everywhere/qtbase/bin/qmake`

the makefile must then be updated with the following changes:
- CC =  clang
- CXX =  clang++
- CFLAGS += -ggdb -fsanitize=address -fno-omit-frame-pointer -fno-optimize-sibling-calls -std=c++17
- CFLAGS replace -02 with -00
- CXXFLAGS += -ggdb -fsanitize=address -fno-omit-frame-pointer -fno-optimize-sibling-calls -std=c++17
- CXXFLAGS replace -02 with -00
- LINK = clang++
- LIBS += -ggdb -fsanitize=address





## Interesting Finds

#### Uncontrolled Recursion (QV4::RuntimeHelpers::ordinaryToPrimitive <-> QV4::RuntimeHelpers::objectDefaultValue)
**Impact**
Attacker that can advertise a malicious PAC file to the device can trigger a DoS

**Description**
CWE-674 Uncontrolled Recursion

Since an element in the array is a pointer to the entire array, the engine attempts to continually allocate and reallocate memory within the heap for new arrays at each level of recursion. This results in the heap space being continually populated with hidden types and the stack being populated with the elements of the array which continually expand to include an increasing number of redundant pointers and data. This happens until the stack runs out of space and segfaults

**Reproduction**
```
let v1 = [-1.0,-1.0,-1.0];
v1[1] = v1;
const v2 = v1--;
```

**Remediation**
To avoid this error two mitigations can be taken:
- use a `depth` variable that is passed as a parameter between `QV4::RuntimeHelpers::ordinaryToPrimitive()` and `QV4::RuntimeHelpers::objectDefaultValue()` and incremented with each call so it can be used to dissalow recursion past a certain depth
- perform a check within `QArrayDataPointer<char16_t>::reallocateAndGrow()` to make sure reallocation of an array does not continue indefinitely when the array contains a pointer to itself as an element

**References**

#### Null Pointer Dereference (QV4::ArrayPrototype::method_values)
**Impact**
Attacker that can advertise a malicious PAC file to the device can trigger a DoS

**Description**
CWE-476: NULL Pointer Dereference

The Symbol.iterator returns an undefined function which when being used as a callback with the builtin Array `reduce() causes a crash via null pointer dereference. The QV4::ArrayPrototype::MethodValues() function takes the null pointer and attempts to dereference the null pointer in order to construct a `ScopedObject` out of it without first checking if its null

**Reproduction**
```
const v2 = [1,1,1,1];
const v5 = v2[Symbol.iterator];
const v7 = [2,2,2,2];
const v9 = v7["reduce"](v5);
```

**Remediation**
Addition of a null-pointer check before dereferencing it in `QV4::ArrayPrototype::method_values()`

**References**


#### User-Controlled Null-Dereference (F72E7A32F3DB_deterministic.js

**Impact**
Attacker that can advertise a malicious PAC file to the device can trigger a DoS

**Description**
CWE-476: NULL Pointer Dereference

It seems like due to the segfault only occuring when the length of the array is greater than 555840, we are accessing memory that is out of bounds of the allocated memory we obtained for the array. The call to .includes() seems to search the whole arrray and lead to a search within an unauthorized region of memory

**Reproduction**
```
const v1 = [];
v1[277913] = 2;
// 277913 is the smallest number that it will seg fault with 
let [...v4] = v1;
```

**Remediation**

**References**

#### Array Iterator Error (161BC301CCA5_deterministic.js)
**Impact**

**Description**
 Indices greater than 277913 and less than ~32 bit int max will cause arbitrary data to be written outside of the array. When the data is deref'd by the spread operator, we segfault. Crashes in Chrome as well. The spread ... operator copies the v1 array which is where it crashes
note uint max size is 0 to 4 294 967 295. Limiting the size of the array

**Reproduction**
```
const v1 = [];
v1[4145569500] &= v1;
let [v2,v3,,...v4] = v1;
````

**Remediation**

**References**


#### Uncontrolled Recursion (QV4::ProxyObject::virtualGet <-> QV4::Object::internalGet)
*Vulnerability Type*:
CWE-674 Uncontrolled Recursion

*Impact*
Denial of Service

*Description*:
seems to be a resource exhaustion issue where `QV4::Object::internalGet` gets called repeatedly (due to the do while loop) until crash due to the creation of a proxy whose handler has its `__proto__` property set to the original proxy within a do while loop.

An interesting feature of this crash is that removing the loop causes the execution to succeed, so it doesn't seem to be simply an issue with the self-reference in the form of the proxy's handler having a property which points to the original proxy, but instead only crashes when v9.__proto__ is set to v11 **repeatedly**. The function executes through [VME::Exec](https://code.woboq.org/qt5/qtdeclarative/src/qml/jsruntime/qv4vme_moth.cpp.html#_ZN3QV44Moth3VME4execEPNS_13CppStackFrameEPNS_15ExecutionEngineE) and then VME:: interpret it then crashes in an call to Object::internalGet.

*Crash-Inducing Code*:
```
const v9 = {};
const v11 = new Proxy(Object,v9);
do {
    v9.__proto__ = v11;
} while (1);
```

*Backtrace*:
```
#0  0x00007ffff7c8d053 in QV4::ProxyObject::virtualGet(QV4::Managed const*, QV4::PropertyKey, QV4::Value const*, bool*) ()
   from /home/kali/Summer22/qjs-eval/target/qt-everywhere-src-6.3.1/qtbase/lib/libQt6Qml.so.6
#1  0x00007ffff7c7aaac in QV4::Object::internalGet(QV4::PropertyKey, QV4::Value const*, bool*) const ()
   from /home/kali/Summer22/qjs-eval/target/qt-everywhere-src-6.3.1/qtbase/lib/libQt6Qml.so.6
#2  0x00007ffff7c8d055 in QV4::ProxyObject::virtualGet(QV4::Managed const*, QV4::PropertyKey, QV4::Value const*, bool*) ()
   from /home/kali/Summer22/qjs-eval/target/qt-everywhere-src-6.3.1/qtbase/lib/libQt6Qml.so.6
#3  0x00007ffff7c7aaac in QV4::Object::internalGet(QV4::PropertyKey, QV4::Value const*, bool*) const ()
   from /home/kali/Summer22/qjs-eval/target/qt-everywhere-src-6.3.1/qtbase/lib/libQt6Qml.so.6
#4  0x00007ffff7c8d055 in QV4::ProxyObject::virtualGet(QV4::Managed const*, QV4::PropertyKey, QV4::Value const*, bool*) ()
   from /home/kali/Summer22/qjs-eval/target/qt-everywhere-src-6.3.1/qtbase/lib/libQt6Qml.so.6
#5  0x00007ffff7c7aaac in QV4::Object::internalGet(QV4::PropertyKey, QV4::Value const*, bool*) const ()
   from /home/kali/Summer22/qjs-eval/target/qt-everywhere-src-6.3.1/qtbase/lib/libQt6Qml.so.6
#6  0x00007ffff7c8d055 in QV4::ProxyObject::virtualGet(QV4::Managed const*, QV4::PropertyKey, QV4::Value const*, bool*) ()
   from /home/kali/Summer22/qjs-eval/target/qt-everywhere-src-6.3.1/qtbase/lib/libQt6Qml.so.6
#7  0x00007ffff7c7aaac in QV4::Object::internalGet(QV4::PropertyKey, QV4::Value const*, bool*) const ()
   from /home/kali/Summer22/qjs-eval/target/qt-everywhere-src-6.3.1/qtbase/lib/libQt6Qml.so.6
#8  0x00007ffff7c8d055 in QV4::ProxyObject::virtualGet(QV4::Managed const*, QV4::PropertyKey, QV4::Value const*, bool*) ()
   from /home/kali/Summer22/qjs-eval/target/qt-everywhere-src-6.3.1/qtbase/lib/libQt6Qml.so.6
#9  0x00007ffff7c7aaac in QV4::Object::internalGet(QV4::PropertyKey, QV4::Value const*, bool*) const ()
   from /home/kali/Summer22/qjs-eval/target/qt-everywhere-src-6.3.1/qtbase/lib/libQt6Qml.so.6
#10 0x00007ffff7c8d055 in QV4::ProxyObject::virtualGet(QV4::Managed const*, QV4::PropertyKey, QV4::Value const*, bool*) ()
   from /home/kali/Summer22/qjs-eval/target/qt-everywhere-src-6.3.1/qtbase/lib/libQt6Qml.so.6
#11 0x00007ffff7c7aaac in QV4::Object::internalGet(QV4::PropertyKey, QV4::Value const*, bool*) const ()
   from /home/kali/Summer22/qjs-eval/target/qt-everywhere-src-6.3.1/qtbase/lib/libQt6Qml.so.6
#12 0x00007ffff7c8d055 in QV4::ProxyObject::virtualGet(QV4::Managed const*, QV4::PropertyKey, QV4::Value const*, bool*) ()
   from /home/kali/Summer22/qjs-eval/target/qt-everywhere-src-6.3.1/qtbase/lib/libQt6Qml.so.6
#13 0x00007ffff7c7aaac in QV4::Object::internalGet(QV4::PropertyKey, QV4::Value const*, bool*) const ()
   from /home/kali/Summer22/qjs-eval/target/qt-everywhere-src-6.3.1/qtbase/lib/libQt6Qml.so.6
#14 0x00007ffff7c8d055 in QV4::ProxyObject::virtualGet(QV4::Managed const*, QV4::PropertyKey, QV4::Value const*, bool*) ()
   from /home/kali/Summer22/qjs-eval/target/qt-everywhere-src-6.3.1/qtbase/lib/libQt6Qml.so.6
(More stack frames follow...)
```

*Similar Crashes Folder*:
`results/crashes/reviewed/proxy-looped-self-reference`



#### Promise Handling (098B393B31C6_deterministic.js)
*Description*: 
The Promise.all() method takes an iterable of promises as an input, and returns a single Promise that resolves to an array of the results of the input promises. This returned promise will resolve when all of the input's promises have resolved, or if the input iterable contains no promises. It rejects immediately upon any of the input promises rejecting or non-promises throwing an error, and will reject with this first rejection message / error. 

The static Reflect.apply() method calls a target function with arguments as specified. 

This code will only crash when Reflect.apply is used. Replacing the third line with a regular call to `Promise.all(v1,v2)` executes successfully.

In other sample crashes, `Promise.reject` could be used in place of `Promise.all` to also trigger a segfault (see promise-handling/2AF627313745_deterministic.js)

*Crash-Inducing Code*:
```
const v1 = [];
const v2 = [];
const v8 = Reflect.apply(Promise.all, v1, v2);
```

*Backtrace*:
```
#0  0x00007ffff7c33630 in QV4::ExecutionEngine::newPromiseObject(QV4::FunctionObject const*, QV4::PromiseCapability const*) () from /home/kali/Summer22/qjs-eval/target/qt-everywhere-src-6.3.1/qtbase/lib/libQt6Qml.so.6
#1  0x00007ffff7c88abd in QV4::PromiseCtor::method_all(QV4::FunctionObject const*, QV4::Value const*, QV4::Value const*, int) () from /home/kali/Summer22/qjs-eval/target/qt-everywhere-src-6.3.1/qtbase/lib/libQt6Qml.so.6
#2  0x00007ffff7cac0a1 in QV4::Reflect::method_apply(QV4::FunctionObject const*, QV4::Value const*, QV4::Value const*, int) () from /home/kali/Summer22/qjs-eval/target/qt-everywhere-src-6.3.1/qtbase/lib/libQt6Qml.so.6
#3  0x00007ffff7cc0c48 in QV4::Runtime::CallProperty::call(QV4::ExecutionEngine*, QV4::Value const&, int, QV4::Value*, int) () from /home/kali/Summer22/qjs-eval/target/qt-everywhere-src-6.3.1/qtbase/lib/libQt6Qml.so.6
#4  0x00007ffff7cf11e2 in QV4::Moth::VME::interpret(QV4::JSTypesStackFrame*, QV4::ExecutionEngine*, char const*) () from /home/kali/Summer22/qjs-eval/target/qt-everywhere-src-6.3.1/qtbase/lib/libQt6Qml.so.6
#5  0x00007ffff7cf708f in QV4::Moth::VME::exec(QV4::JSTypesStackFrame*, QV4::ExecutionEngine*) () from /home/kali/Summer22/qjs-eval/target/qt-everywhere-src-6.3.1/qtbase/lib/libQt6Qml.so.6
#6  0x00007ffff7c56ef0 in QV4::ArrowFunction::virtualCall(QV4::FunctionObject const*, QV4::Value const*, QV4::Value const*, int) ()
   from /home/kali/Summer22/qjs-eval/target/qt-everywhere-src-6.3.1/qtbase/lib/libQt6Qml.so.6
#7  0x00007ffff7cbc60d in QV4::Runtime::CallName::call(QV4::ExecutionEngine*, int, QV4::Value*, int) () from /home/kali/Summer22/qjs-eval/target/qt-everywhere-src-6.3.1/qtbase/lib/libQt6Qml.so.6
#8  0x00007ffff7cf116e in QV4::Moth::VME::interpret(QV4::JSTypesStackFrame*, QV4::ExecutionEngine*, char const*) () from /home/kali/Summer22/qjs-eval/target/qt-everywhere-src-6.3.1/qtbase/lib/libQt6Qml.so.6
#9  0x00007ffff7cf708f in QV4::Moth::VME::exec(QV4::JSTypesStackFrame*, QV4::ExecutionEngine*) () from /home/kali/Summer22/qjs-eval/target/qt-everywhere-src-6.3.1/qtbase/lib/libQt6Qml.so.6
#10 0x00007ffff7c554fa in QV4::Function::call(QV4::Value const*, QV4::Value const*, int, QV4::ExecutionContext*) () from /home/kali/Summer22/qjs-eval/target/qt-everywhere-src-6.3.1/qtbase/lib/libQt6Qml.so.6
#11 0x00007ffff7cc4fbc in QV4::Script::run(QV4::Value const*) () from /home/kali/Summer22/qjs-eval/target/qt-everywhere-src-6.3.1/qtbase/lib/libQt6Qml.so.6
#12 0x00007ffff7bef9d4 in QJSEngine::evaluate(QString const&, QString const&, int, QList<QString>*) () from /home/kali/Summer22/qjs-eval/target/qt-everywhere-src-6.3.1/qtbase/lib/libQt6Qml.so.6
#13 0x0000555555556491 in main (argc=<optimized out>, argc@entry=0x2, argv=argv@entry=0x7fffffffdf18) at harness.cpp:61
#14 0x00007ffff709b7fd in __libc_start_main (main=0x555555556300 <main(int, char**)>, argc=0x2, argv=0x7fffffffdf18, init=<optimized out>, fini=<optimized out>, rtld_fini=<optimized out>, stack_end=0x7fffffffdf08)
    at ../csu/libc-start.c:332
#15 0x00005555555566ca in _start () at ../../../target/qt-everywhere-src-6.3.1/qtbase/include/QtCore/../../src/corelib/tools/qlist.h:418
```

*Similar Crashes Folder*:
`results/crashes/reviewed/promise-handling`

### CET

It looks like CET is enabled in the [library](https://stackoverflow.com/questions/56905811/what-does-the-endbr64-instruction-actually-do) which would greatly restrict our ability to do ROP.

#### Javascript can access and modify the Engine its running within

![qjsengine.cpp line 159](./assets/engine-mod.png)

Code to recreate overwriting of global objects
 
    myEngine.globalObject().setProperty("value", 123);
    myEngine.evaluate("value = 1337;");
    myEngine.evaluate("print(value)");
    // value is 1337 
    
#### Denial of service
QJSEngine has no [abort](https://bugreports.qt.io/browse/QTBUG-49080) function. So it is possible to make the engine not terminate.
 
    myEngine.evaluate("while(1) {}");

#### Can cause the engine to run out of memory
[link](https://stackoverflow.com/questions/16797423/how-to-handle-v8-engine-crash-when-process-runs-out-of-memory)
#### Note about application security

![app sec](./assets/app-sec.png)


#### Code from one evaluation can pollute the global object used by the next evaluation

![global-object-pollution](./assets/global-object-pollution.png)


#### Lack of support for async
when testing the interpreter, we found that since qt6 runs a main GUI thread that it doesn't like to have blocked, running async functions in this thread is dissalowed and an alternative is provided by the QJSEngine::WorkerScript function

TODO: verify with screenshots

#### Lack of support for throw

TODO: verify with screenshots


## Further Research

#### Asynchronous Function Testing
We did not use the asynchronous code generators due to Qjsengine not exposing an `async` keyword and instead only allowing multi-threading through the use of a `QtQML::WorkerScript` function. Future research could build off this instrumetation by modifying fuzzilli to use the WorkerScript functionality to test multi-threading

#### importModule Testing
the importModule function expects utf8 text representing the name of a module. It might be wise to verify that correct safeguards are in place within the code that restrict non-utf8 text from being processed.
