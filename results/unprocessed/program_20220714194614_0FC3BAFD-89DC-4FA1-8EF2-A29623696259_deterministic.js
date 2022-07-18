function main() { 
const v1 = [536870912,536870912,536870912];
v1[4] = v1;
throw v1;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
