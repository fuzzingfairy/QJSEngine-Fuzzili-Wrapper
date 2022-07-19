function main() { 
const v0 = {};
const v1 = [v0,v0];
const v3 = {};
const v4 = [v3];
v0.__proto__ = v1;
const v6 = Object();
let v7 = "undefined";
const v9 = {"apply":v3,"construct":v3,"defineProperty":v3,"get":34667,"getOwnPropertyDescriptor":Function,"getPrototypeOf":34667,"has":v7,"ownKeys":v7,"preventExtensions":Function,"set":v0,"setPrototypeOf":v3};
const v11 = new Proxy(v1,v9);
v7 -= v1;
const v12 = Object;
const v13 = Function();
const v14 = Object;
const v15 = Uint16Array;
const v17 = Object();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
