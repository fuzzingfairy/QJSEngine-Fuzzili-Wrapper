function main() { 
const v1 = [630792964,630792964,630792964,630792964];
v1[8] = v1;
const v3 = [...v1];
const v4 = v3 & null;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
