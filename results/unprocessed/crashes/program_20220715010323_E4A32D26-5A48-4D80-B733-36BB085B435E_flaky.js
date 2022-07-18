function main() { 
const v2 = ["number","number","number",-4294967297,"number",-4294967297];
v2[5] = v2;
const v3 = v2();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
