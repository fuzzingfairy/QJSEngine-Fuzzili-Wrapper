function main() { 
const v1 = Object.prototype;
const v2 = {};
const v4 = new Proxy(Object,v2);
v1.__proto__ = v4;
const v6 = Object();
const v7 = v6.cosh();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
