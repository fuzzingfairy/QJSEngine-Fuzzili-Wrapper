function main() { 
const v0 = {};
const v1 = [v0,v0,v0,v0];
for (const v2 of v1) {
    v2.__proto__ = v1;
}
const v4 = 31084 != v0;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
