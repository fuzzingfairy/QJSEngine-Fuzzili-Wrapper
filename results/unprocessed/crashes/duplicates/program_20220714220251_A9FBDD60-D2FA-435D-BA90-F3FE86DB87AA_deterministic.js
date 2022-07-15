function main() { 
function* v2(v3,v4) {
    'use strict';
}
const v6 = Object();
const v7 = {"b":v6,"c":isNaN,"e":isNaN};
const v9 = {"apply":Object,"call":v2,"defineProperty":Object,"deleteProperty":v2,"getOwnPropertyDescriptor":Object,"getPrototypeOf":EvalError,"has":Object,"isExtensible":Object,"ownKeys":Object,"preventExtensions":v2,"set":EvalError,"setPrototypeOf":Object};
const v11 = new Proxy(v7,v9);
with (v7) {
    __proto__ = v11;
    const v12 = Object;
}
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
