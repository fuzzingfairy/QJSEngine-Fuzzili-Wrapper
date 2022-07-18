function main() { 
const v1 = Object();
const v3 = v1.__proto__;
const v7 = new Proxy(v1,Object);
v3.__proto__ = v7;
const v8 = Int8Array(-2683072990);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
