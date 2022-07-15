function main() { 
const v0 = {};
const v1 = [v0];
const v3 = new Object(...v1);
v3.__proto__ = v1;
const v5 = v3["padEnd"]();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
