function main() { 
const v0 = {};
const v1 = [v0,v0,v0,v0,v0];
const v2 = {};
v0.__proto__ = v1;
const v3 = v1[v0];
const v4 = {"apply":v3,"construct":v3,"defineProperty":v3,"deleteProperty":v3,"getOwnPropertyDescriptor":v3,"has":v3,"isExtensible":v3,"ownKeys":v3,"set":v3,"setPrototypeOf":v3};
const v6 = new Proxy(v1,v4);
const v7 = [v2,v2,v2];
const v8 = /pI\D+/gmu;
const v9 = {};
const v10 = [v9,v9,v9];
const v11 = "3";
const v13 = Object();
const v15 = Object();
const v16 = `
    v1[7] = v4;
`;
const v18 = eval(v16);
const v19 = Object(v2,Object);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
