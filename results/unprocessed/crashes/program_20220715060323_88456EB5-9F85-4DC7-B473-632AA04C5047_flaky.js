function main() { 
const v1 = [990794753,990794753,990794753];
const v3 = Object();
v1[1] = v1;
v3.a ^= v1;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
