function main() { 
const v0 = {};
const v1 = [v0,v0,v0,v0,v0];
const v2 = v1.unshift(v1);
const v3 = -v1;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
