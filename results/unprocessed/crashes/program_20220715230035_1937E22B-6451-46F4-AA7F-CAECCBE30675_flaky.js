function main() { 
const v2 = [3.0,3.0,3.0];
v2[3.0] = v2;
const v3 = {};
const v4 = [v3,v3,v2,v3];
const v5 = v4();
const v6 = [6,6];
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
