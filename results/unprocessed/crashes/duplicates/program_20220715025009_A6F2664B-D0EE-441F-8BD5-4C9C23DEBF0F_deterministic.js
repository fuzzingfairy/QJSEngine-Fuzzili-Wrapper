function main() { 
const v1 = [93663.59769436717,93663.59769436717,93663.59769436717,93663.59769436717,93663.59769436717];
const v2 = {};
const v4 = new Proxy(v1,v2);
v1.__proto__ = v4;
const v5 = v4();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
