function main() { 
const v0 = -Infinity;
const v1 = [v0,v0,v0,v0];
const v3 = {"get":Object,"set":Object};
const v4 = {};
const v5 = [v1];
const v6 = v3 <= v4;
const v7 = v6 ? v3 : v4;
v1[2] = v5;
const v8 = v5();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
