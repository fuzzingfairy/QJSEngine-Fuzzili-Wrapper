function main() { 
const v1 = {};
const v2 = [v1];
v1.__proto__ = v2;
const v3 = [3665086202,3665086202,3665086202,3665086202];
const v4 = `a${v2}cXGHpEHcxy${v3}2147483647${v3}4096`;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
