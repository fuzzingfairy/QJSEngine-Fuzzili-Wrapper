function main() { 
const v0 = {};
const v1 = [v0,v0];
let [v2,v3,v4] = v1;
v0.__proto__ = v1;
for (let [v5,v6] of v3) {
    const v7 = v6();
}
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
