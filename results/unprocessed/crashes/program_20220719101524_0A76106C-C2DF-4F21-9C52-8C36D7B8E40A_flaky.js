function main() { 
const v0 = {};
const v1 = [v0,v0];
const v2 = {};
const v3 = [v2,v1];
const v4 = v1.fill(v3);
const v5 = v1.defineProperty();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
