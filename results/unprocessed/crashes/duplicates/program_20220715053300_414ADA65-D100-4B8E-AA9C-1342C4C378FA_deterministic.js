function main() { 
const v0 = {};
const v1 = [v0,v0,v0,v0,v0];
const v3 = v1["fill"](v1);
const v4 = v3();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
