function main() { 
const v0 = {};
const v1 = [v0];
for (const v2 of v1) {
    const v3 = v1.splice(v2,v2,v1,v2);
}
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
