function main() { 
const v0 = {};
const v1 = [v0,v0];
const v3 = [2.0,2.0,2.0,2.0];
const v4 = v3.fill(v3);
const v5 = v4 * v4;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
