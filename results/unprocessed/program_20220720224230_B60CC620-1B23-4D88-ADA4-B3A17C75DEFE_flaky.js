function main() { 
const v0 = {};
const v1 = [v0];
v0.__proto__ = v1;
const v3 = Object();
const v4 = {};
const v5 = [v4,v4,v4,v4,v0];
const v7 = [5.0,5.0,5.0];
const v8 = {"length":5.0};
v4[Object] = v1;
const v9 = ReferenceError;
v4[v0] <<= v8;
const v10 = Object;
const v11 = {};
const v12 = [v11,v5,v11];
const v14 = Object();
const v15 = Object(5.0,v5,v3);
const v16 = /b/g;
const v18 = Object();
const v20 = Object();
const v22 = {"get":Object};
const v23 = Object.defineProperty(v12,"__proto__",v22);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
