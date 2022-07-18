function main() { 
const v0 = {};
const v1 = [v0];
v0.__proto__ = v1;
for (let [...v2] of v1) {
    const v3 = v2();
}
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
