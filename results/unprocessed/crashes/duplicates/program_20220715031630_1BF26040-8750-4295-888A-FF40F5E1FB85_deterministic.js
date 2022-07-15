function main() { 
const v1 = [0.0];
v1[0.0] = v1;
let [v2] = v1;
const v3 = v2();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
