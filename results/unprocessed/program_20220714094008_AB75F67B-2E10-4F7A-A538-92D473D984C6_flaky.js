function main() { 
const v1 = [18007,18007];
const v4 = Object();
const v5 = {"deleteProperty":Object,"getOwnPropertyDescriptor":isNaN,"has":isNaN};
const v7 = new Proxy(v4,v5);
const v8 = 1;
v4.__proto__ = v7;
const v9 = 1;
const v10 = v7();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
