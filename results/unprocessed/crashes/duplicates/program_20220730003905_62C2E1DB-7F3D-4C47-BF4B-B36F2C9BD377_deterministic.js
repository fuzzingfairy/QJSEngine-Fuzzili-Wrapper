function main() { 
function v1(v2,v3,v4,v5,v6) {
}
const v8 = Object();
const v11 = [9007199254740991,9007199254740991];
function v13() {
    with (Object) {
        b = v8;
    }
}
const v15 = {"construct":v1,"defineProperty":Object,"getOwnPropertyDescriptor":Object,"has":Object,"isExtensible":Object,"ownKeys":v13,"set":Object,"setPrototypeOf":Object};
Object.__proto__ = v11;
const v17 = new Proxy(Object,v15);
v11.__proto__ = v17;
const v18 = v13();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
