function main() { 
const v0 = isFinite;
const v1 = {};
const v2 = [v1,v1,v1];
v1.__proto__ = v2;
const v4 = v2["pop"]();
const v5 = Object;
const v6 = v4();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
