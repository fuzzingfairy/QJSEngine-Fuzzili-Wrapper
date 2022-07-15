function main() { 
const v1 = [-1168658355,-1168658355,-1168658355,-1168658355,-1168658355];
for (const v2 in v1) {
    v1[v2] = v1;
}
const v3 = v1();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
