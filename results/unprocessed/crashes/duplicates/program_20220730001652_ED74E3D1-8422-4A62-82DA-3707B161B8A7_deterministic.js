function main() { 
const v0 = {};
const v1 = [v0,v0,v0];
function v3(v4,v5,v6) {
    'use strict';
}
const v8 = Object();
let [v9,v10,v11,v12] = v1;
const v13 = Number === Object;
const v14 = v13 ? Number : Object;
const v15 = {"call":v11,"construct":v14,"deleteProperty":v3,"get":v14,"getOwnPropertyDescriptor":v11,"getPrototypeOf":Object,"has":v9,"isExtensible":v11,"ownKeys":v11,"preventExtensions":v3,"set":v10,"setPrototypeOf":v9};
const v17 = new Proxy(v1,v15);
const v20 = [v1,v17,v15,v9];
const v21 = Promise.race;
const v22 = Reflect.apply(v21,v8,v20);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
