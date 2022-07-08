function main() { 
const v1 = {};
const v2 = [v1];
v1.__proto__ = v2;
const v4 = v2["map"](Error);
const v5 = 439493.78674306464;
const v7 = Math.atan(v4);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
