function main() { 
const v1 = [1000000000.0,1000000000.0];
const v3 = v1["fill"](v1);
const v4 = {};
const v5 = [v4,v4,v3];
const v6 = v5();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
