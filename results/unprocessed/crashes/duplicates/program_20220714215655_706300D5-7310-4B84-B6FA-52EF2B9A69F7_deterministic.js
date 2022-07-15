function main() { 
const v1 = [3.0,3.0,3.0,3.0,3.0];
v1[3] = v1;
let [v2,...v3] = v1;
const v4 = v3.imul();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
