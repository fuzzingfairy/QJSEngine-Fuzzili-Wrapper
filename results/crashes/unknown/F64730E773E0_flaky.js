function main() { 
const v0 = /\wd/uigym;
const v1 = {"call":v0};
const v3 = new Proxy(v0,v1);
v0.__proto__ = v3;
const v5 = Symbol.split;
v3[v5] = Symbol;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
