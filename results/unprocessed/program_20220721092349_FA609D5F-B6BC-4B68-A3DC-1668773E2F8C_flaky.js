function main() { 
let v0 = {};
const v1 = [v0,v0,v0,v0,v0];
v1[0] = v1;
[v0] = v1;
v0 |= v0;
const v2 = Object;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
