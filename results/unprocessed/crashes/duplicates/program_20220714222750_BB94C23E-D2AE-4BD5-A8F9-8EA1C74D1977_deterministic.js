function main() { 
const v1 = [-4096,-4096,-4096,-4096];
const v2 = {};
let v3 = [v2,v2,v2];
v1[8] = v1;
v3 >>>= v1;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
