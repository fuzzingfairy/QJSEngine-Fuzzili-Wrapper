function main() { 
const v3 = [65536];
v3[1] = v3;
const v4 = "__proto__" << 3.0;
const v5 = v3 % v4;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
