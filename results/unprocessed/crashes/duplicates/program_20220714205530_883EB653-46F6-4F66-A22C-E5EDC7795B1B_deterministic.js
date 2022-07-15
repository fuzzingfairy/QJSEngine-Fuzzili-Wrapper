function main() { 
let v1 = [-3.0,-3.0];
v1[5] = v1;
const v2 = [-3.0,-3.0,-3.0];
v1 >>>= v2;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
