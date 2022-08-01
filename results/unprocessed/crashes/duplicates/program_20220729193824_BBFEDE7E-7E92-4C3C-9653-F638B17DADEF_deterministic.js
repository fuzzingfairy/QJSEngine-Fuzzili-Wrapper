function main() { 
function v0(v1,v2) {
    'use strict';
}
const v3 = {};
const v4 = [v3];
function v5(v6,v7,v8) {
    const v9 = v7 > v4;
}
const v10 = {};
const v11 = {};
const v12 = [v11];
const v14 = {"apply":v5,"defineProperty":Object,"deleteProperty":v5,"get":v5,"getOwnPropertyDescriptor":v0,"has":Object,"ownKeys":v5};
const v16 = new Proxy(v10,v14);
v11.__proto__ = v12;
const v17 = v5(v16,v11);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
