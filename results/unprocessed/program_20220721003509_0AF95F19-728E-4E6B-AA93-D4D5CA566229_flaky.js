function main() { 
const v1 = "string";
const v3 = [965468.5853212718];
const v4 = {};
const v5 = ["undefined",v4];
v3[0] = v3;
const v6 = v3();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
