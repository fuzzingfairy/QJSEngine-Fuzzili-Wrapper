function main() { 
const v1 = [-346374932,-346374932,-346374932];
const v2 = {};
const v3 = [v1];
v1[1] = v3;
const v5 = Function(v2,v3);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
