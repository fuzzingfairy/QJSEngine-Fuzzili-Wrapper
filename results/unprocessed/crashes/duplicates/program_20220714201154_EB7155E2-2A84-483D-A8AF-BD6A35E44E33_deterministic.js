function main() { 
const v1 = [Infinity,Infinity,Infinity,Infinity];
const v2 = Infinity > v1;
const v3 = v2 ? Infinity : v1;
v1[4] = v3;
const v4 = v3();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
