function main() { 
const v0 = {};
const v1 = [v0,v0,v0,v0,v0];
with (v0) {
    __proto__ = v1;
    const v3 = v1 << -1000000000.0;
}
const v4 = undefined;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
