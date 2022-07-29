function main() { 
const v1 = [Infinity,Infinity,Infinity,Infinity];
let v2 = 65535;
v1[3] = v1;
v2 %= v1;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
