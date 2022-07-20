function main() { 
const v0 = {};
const v1 = [v0,v0,v0,v0,v0];
const v2 = v1.fill(v1);
const v3 = [v2,v1];
const v5 = [-4.0,-4.0,-4.0,-4.0];
const v6 = {};
v5[v3] = v6;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
