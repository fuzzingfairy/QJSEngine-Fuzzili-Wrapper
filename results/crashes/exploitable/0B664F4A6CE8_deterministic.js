function main() { 
const v0 = {};
const v2 = [-754771.5108358421,v0,-754771.5108358421];
const v4 = new Proxy(v2,v2);
v2.__proto__ = v4;
const v5 = v4();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
