function main() { 
const v1 = {};
const v2 = [v1,v1,v1];
v1.__proto__ = v2;
const v4 = new Int8Array(v1);
const v5 = Reflect;
const v6 = Object(Object,v2,Int8Array);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
