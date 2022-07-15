function main() { 
const v0 = {};
const v1 = [v0];
const v2 = [v1];
const v3 = v1.fill(v1);
const v4 = v2();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
