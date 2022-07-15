function main() { 
const v0 = {};
const v2 = Object();
const v3 = [v0,v2,v0];
with (v0) {
    __proto__ = v3;
}
const v5 = new Int32Array(v3);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
