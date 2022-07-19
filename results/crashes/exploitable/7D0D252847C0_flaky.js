function main() { 
const v1 = {};
const v3 = new Proxy(Int16Array,v1);
v1.__proto__ = v3;
v1.__proto__ = Object;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
