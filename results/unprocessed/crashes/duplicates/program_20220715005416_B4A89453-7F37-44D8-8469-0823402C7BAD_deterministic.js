function main() { 
const v1 = [837599183];
v1[4] = v1;
const v3 = Object();
const v4 = v1 in v3;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
