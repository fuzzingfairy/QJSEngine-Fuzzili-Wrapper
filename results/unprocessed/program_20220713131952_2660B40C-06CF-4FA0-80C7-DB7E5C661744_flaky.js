function main() { 
const v0 = {};
const v1 = [v0];
v1[1] = v1;
const v2 = v1();
const v4 = {"get":Object,"set":Object};
const v5 = Object.defineProperty();
const v6 = Symbol;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
