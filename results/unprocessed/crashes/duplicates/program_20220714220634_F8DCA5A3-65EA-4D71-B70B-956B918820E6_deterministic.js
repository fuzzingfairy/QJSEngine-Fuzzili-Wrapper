function main() { 
const v1 = {"defineProperty":Uint16Array};
const v3 = new Proxy(Uint16Array,v1);
v1.__proto__ = v3;
const v4 = v3.__proto__;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
