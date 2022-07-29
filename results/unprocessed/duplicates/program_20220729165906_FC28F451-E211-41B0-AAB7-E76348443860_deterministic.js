function main() { 
const v0 = {};
const v1 = [v0];
v0.__proto__ = v1;
const v3 = Object();
for (const v4 of v1) {
    const v5 = v4 in v3;
}
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
