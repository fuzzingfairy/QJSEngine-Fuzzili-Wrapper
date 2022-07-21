function main() { 
const v0 = {};
const v1 = Object;
const v2 = [v0,v0,v0,v0];
v2[0] = v2;
const v4 = v2();
const v5 = {"get":Object};
const v6 = v5();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
