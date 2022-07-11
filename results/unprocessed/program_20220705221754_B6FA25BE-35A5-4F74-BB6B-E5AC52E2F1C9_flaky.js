function main() { 
const v0 = {};
const v1 = [v0,v0];
v1[5] = v1;
const v2 = `-4096${v1}e${v1}-9007199254740993${v0}undefined${v1}8`;
const v3 = 29424;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
