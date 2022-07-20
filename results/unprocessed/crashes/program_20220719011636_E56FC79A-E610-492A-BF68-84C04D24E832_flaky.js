function main() { 
const v1 = [65536,65536,65536];
v1[6] = v1;
do {
} while (v1 < 7);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
