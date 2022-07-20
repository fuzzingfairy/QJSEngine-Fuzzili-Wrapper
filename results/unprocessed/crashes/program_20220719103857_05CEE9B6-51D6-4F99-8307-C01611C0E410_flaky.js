function main() { 
const v1 = [16,16,16];
const v2 = {};
v1[1] = v1;
const v3 = v1(v2,v1);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
