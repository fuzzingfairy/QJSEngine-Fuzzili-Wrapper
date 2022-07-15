function main() { 
const v1 = [4.0];
v1[v1] = v1;
throw v1;
const v2 = "object";
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
