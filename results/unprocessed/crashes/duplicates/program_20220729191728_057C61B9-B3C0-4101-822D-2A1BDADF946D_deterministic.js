function main() { 
const v1 = [1293126060,1293126060,1293126060,1293126060];
v1[0] = v1;
const v3 = Symbol(v1);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
