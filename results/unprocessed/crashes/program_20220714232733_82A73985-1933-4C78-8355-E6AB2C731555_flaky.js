function main() { 
const v1 = [1049831995,1049831995,1049831995,1049831995];
v1[8] = v1;
const v2 = {};
const v3 = v2[v1];
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
