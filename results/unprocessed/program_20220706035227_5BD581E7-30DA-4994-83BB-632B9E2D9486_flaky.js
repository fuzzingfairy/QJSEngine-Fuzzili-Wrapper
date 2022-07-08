function main() { 
const v1 = [536870912,536870912,536870912,536870912];
v1[2] = v1;
v1.constructor -= v1;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
