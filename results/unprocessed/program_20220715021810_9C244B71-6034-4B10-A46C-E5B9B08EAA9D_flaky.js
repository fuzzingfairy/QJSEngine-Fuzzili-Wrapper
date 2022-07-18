function main() { 
const v1 = [1000000000.0,1000000000.0,1000000000.0];
v1[7] = v1;
const v3 = {};
const v4 = [v3,v1];
const v5 = v4();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
