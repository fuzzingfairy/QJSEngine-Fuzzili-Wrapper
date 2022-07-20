function main() { 
const v0 = {};
const v1 = [v0,v0,v0,v0,v0];
v0.__proto__ = v1;
for (let [v2,v3,v4,v5] of v1) {
    const v6 = v5 ^ v0;
}
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
