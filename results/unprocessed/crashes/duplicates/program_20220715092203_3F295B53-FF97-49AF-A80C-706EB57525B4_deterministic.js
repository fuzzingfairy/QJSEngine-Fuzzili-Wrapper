function main() { 
const v0 = {};
const v1 = [v0,v0];
v0.__proto__ = v1;
for (const v3 of v1) {
    const v4 = v3 >> Object;
}
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
