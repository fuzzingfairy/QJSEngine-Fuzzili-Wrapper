function main() { 
const v1 = [4294967297];
v1[6] = v1;
const v5 = {"get":Object};
const v6 = Object.defineProperty(v1,-1205017830,v5);
const v7 = v6 in v1;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
