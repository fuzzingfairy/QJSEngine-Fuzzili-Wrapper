function main() { 
const v1 = [1000000000000.0,1000000000000.0,1000000000000.0];
const v2 = {};
v1[0] = v1;
const v3 = [v2,v2,v2];
for (let [v4,v5,v6] of v1) {
    const v7 = v3[v4];
}
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
