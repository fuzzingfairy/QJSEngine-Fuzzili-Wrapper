function main() { 
let v1 = [536870912,536870912,536870912];
v1[6] = v1;
v1 *= 536870912;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
