function main() { 
const v1 = Object();
const v3 = [v1,-1701721928,-1701721928,-1701721928,-1701721928];
const v4 = Proxy;
const v5 = {};
v1.__proto__ = v3;
const v7 = Object();
const v8 = v7 !== v3;
const v9 = v8 ? v7 : v5;
Object[v3] = v9;
const v10 = Object;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
