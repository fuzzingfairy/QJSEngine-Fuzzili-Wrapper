function main() { 
const v0 = {};
const v1 = [v0,v0,v0,v0];
v0.__proto__ = v1;
const v3 = Object();
const v6 = Object();
const v8 = Object();
const v10 = Object;
const v11 = Object(v0,Object,v0,v8,4294967297);
const v12 = v11 ^ v3;
const v14 = Object;
Object[5] = String;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
