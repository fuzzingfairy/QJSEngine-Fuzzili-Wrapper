function main() { 
const v1 = [1000.0,1000.0,1000.0,1000.0];
const v2 = {};
const v3 = [v2,v2,v2];
with (v2) {
    __proto__ = v3;
}
const v4 = v3 in v1;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
