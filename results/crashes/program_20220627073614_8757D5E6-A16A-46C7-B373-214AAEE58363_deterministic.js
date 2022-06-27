function main() { 
let v1 = [0,0,0];
v1[2] = v1;
v1 |= 9007199254740993;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
