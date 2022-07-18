function main() { 
const v1 = [65537,65537,65537,65537];
const v2 = [65537];
v1[5] = v2;
v2[9] = v1;
v2.length |= v2;
const v4 = Object.prototype;
const v5 = -1000000000.0;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
