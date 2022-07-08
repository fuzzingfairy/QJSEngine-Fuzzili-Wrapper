function main() { 
const v1 = [-9007199254740991,-9007199254740991,-9007199254740991,-9007199254740991];
v1[0] = v1;
const v3 = new Uint8Array();
const v4 = [v1];
const v5 = v4 in v3;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
