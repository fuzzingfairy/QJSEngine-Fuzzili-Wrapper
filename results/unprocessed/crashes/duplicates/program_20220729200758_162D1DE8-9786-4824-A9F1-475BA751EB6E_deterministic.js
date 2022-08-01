function main() { 
const v0 = {};
const v1 = [v0,v0,v0];
v0.__proto__ = v1;
for (let v4 = v1; v4 < 9; v4++) {
}
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
