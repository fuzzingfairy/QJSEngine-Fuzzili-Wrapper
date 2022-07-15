function main() { 
const v1 = [536870912,536870912,536870912,536870912];
v1[3] = v1;
const v2 = v1();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
