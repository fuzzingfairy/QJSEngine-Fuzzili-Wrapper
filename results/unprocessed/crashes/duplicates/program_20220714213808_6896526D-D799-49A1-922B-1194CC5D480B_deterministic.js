function main() { 
const v1 = [1.0,1.0,1.0,1.0];
v1[6] = v1;
Object[v1] = 1.0;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
