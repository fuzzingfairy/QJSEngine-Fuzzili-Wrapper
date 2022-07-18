function main() { 
const v1 = {"set":gc};
const v3 = new Proxy(gc,v1);
v1.__proto__ = v3;
with (v1) {
    const v4 = unscopable;
}
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
