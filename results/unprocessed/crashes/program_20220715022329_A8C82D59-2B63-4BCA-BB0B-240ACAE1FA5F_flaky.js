function main() { 
const v1 = new Uint8ClampedArray();
const v2 = {};
const v3 = [v2,v2,v2,v2,v2];
with (v2) {
    __proto__ = v3;
}
for (const v4 of v3) {
    const v5 = delete v1[v4];
}
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
