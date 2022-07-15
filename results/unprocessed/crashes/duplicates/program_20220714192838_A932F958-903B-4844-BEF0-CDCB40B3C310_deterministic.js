function main() { 
const v1 = [3.0];
v1[v1] = v1;
const v3 = Math.exp(v1);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
