function main() { 
const v0 = {};
const v1 = [v0];
const v3 = v0.__proto__;
v1[6] = v1;
const v4 = `4294967296${undefined}10${v1}function${v3}undefined`;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
