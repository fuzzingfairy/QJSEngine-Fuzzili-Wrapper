function main() { 
const v1 = [128,128];
const v2 = [...v1,v1,v1,...v1,128,128,128];
const v5 = [0.0];
for (const v6 of v5) {
    v1[v6] = v1;
}
const v7 = delete Object[v2];
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
