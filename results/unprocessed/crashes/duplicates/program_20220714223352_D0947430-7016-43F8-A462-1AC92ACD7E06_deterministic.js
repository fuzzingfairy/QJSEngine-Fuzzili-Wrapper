function main() { 
const v0 = {};
let v2 = [v0,v0,v0,v0,v0];
v2[1] = v2;
v2 <<= Object;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
