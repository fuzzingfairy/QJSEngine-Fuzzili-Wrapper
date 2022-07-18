function main() { 
const v0 = {};
const v1 = v0 in v0;
const v2 = {"call":v1,"construct":v0,"defineProperty":v0,"getOwnPropertyDescriptor":v1,"getPrototypeOf":v1,"has":v1,"isExtensible":v1,"ownKeys":v0,"set":v1,"setPrototypeOf":v1};
const v4 = new Proxy(v0,v2);
v0.__proto__ = v4;
const v5 = [v0,v0,v0,v0,v0];
const v7 = [-4.0,-4.0,-4.0,-4.0,-4.0];
const v8 = 730092265;
const v9 = Object;
const v11 = {};
const v12 = {};
const v13 = [v12,v12,v12];
const v14 = v4 / Object;
const v15 = eval;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
