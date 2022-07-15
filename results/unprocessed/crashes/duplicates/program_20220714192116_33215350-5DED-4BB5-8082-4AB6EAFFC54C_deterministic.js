function main() { 
const v0 = {};
const v1 = [v0,v0,v0,v0,v0];
const v2 = {};
const v3 = {};
const v4 = v1.splice(v0,v2,v2,v0,v1);
const v5 = [v2,v2,v2];
v5[v1] = v3;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
