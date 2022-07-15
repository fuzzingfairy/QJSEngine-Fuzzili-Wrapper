function main() { 
const v1 = [1000000000.0,1000000000.0];
const v2 = [1000000000.0,1000000000.0,v1,1000000000.0];
v1[4] = v2;
Object[-63889003] /= v1;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
