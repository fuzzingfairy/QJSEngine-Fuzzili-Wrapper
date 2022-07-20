function main() { 
const v2 = Object();
const v3 = [Object,..."-128",v2,"-128"];
Object.__proto__ = v3;
const v5 = v3();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
