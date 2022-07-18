function main() { 
const v1 = [-5.0];
let v2 = 0;
v1[3] = v1;
const v4 = v2++;
throw v1;
const v5 = 0;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
