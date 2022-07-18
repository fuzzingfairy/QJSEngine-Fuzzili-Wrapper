function main() { 
const v0 = {};
let v1 = [v0,v0,v0];
v1[6] = v1;
const v2 = ++v1;
const v4 = Object();
const v5 = Object;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
