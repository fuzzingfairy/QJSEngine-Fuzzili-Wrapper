function main() { 
const v1 = new Uint8ClampedArray();
const v2 = {};
const v3 = [v2,v2,v2,v2,v1];
const v5 = Symbol.match;
with (v2) {
    __proto__ = v3;
    const v6 = v5[v2];
}
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
