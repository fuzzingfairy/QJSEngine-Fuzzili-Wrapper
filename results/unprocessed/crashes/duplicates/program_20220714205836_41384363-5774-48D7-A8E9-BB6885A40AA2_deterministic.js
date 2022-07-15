function main() { 
const v1 = [3.0,3.0,3.0,3.0];
const v2 = v1;
const v4 = Object();
v2[6] = v2;
v4[Symbol] %= v1;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
