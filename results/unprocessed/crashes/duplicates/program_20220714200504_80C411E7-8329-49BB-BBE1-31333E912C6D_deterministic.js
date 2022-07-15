function main() { 
const v1 = [16,16,16,16,16];
const v2 = [16,16,16,16];
const v3 = v1.fill(v1);
v2[v1] %= v3;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
