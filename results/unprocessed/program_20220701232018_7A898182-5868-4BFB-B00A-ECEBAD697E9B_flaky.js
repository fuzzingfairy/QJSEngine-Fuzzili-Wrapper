function main() { 
const v0 = {};
const v1 = [v0];
v0.__proto__ = v1;
const v3 = new Int16Array(v1);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR: