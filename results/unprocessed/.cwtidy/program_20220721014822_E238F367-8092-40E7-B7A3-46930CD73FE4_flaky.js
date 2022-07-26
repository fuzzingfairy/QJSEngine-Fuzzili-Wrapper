function main() { 
const v0 = {};
const v1 = delete v0.__proto__;
const v2 = delete v0[4294967296];
const v3 = [v0];
v0.__proto__ = v3;
const v4 = v3 >= v1;
const v5 = !v3;
const v7 = Object();
const v8 = v2 < v0;
const v9 = v8 ? v2 : v0;
const v11 = [...v3,Number,...v3,...v3,v0,v0,Number,...v3];
const v14 = this;
const v15 = new Object(v8,...v3);
const v16 = "miFXnwlTc6";
const v18 = Symbol.species;
v11[v18] = Set;
const v20 = Object();
const v21 = 4.0;
const v23 = Object();
v23[-2147483649] &= v23;
const v24 = Math;
const v26 = Object();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
