function main() { 
const v1 = [-237083.71887165343,-237083.71887165343,-237083.71887165343,-237083.71887165343];
v1[5] = v1;
const v3 = Object.freeze();
const v5 = `number${v3}0`[v1];
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
