function main() { 
const v0 = {};
const v1 = [v0];
v0.__proto__ = v1;
const v3 = Object();
const v4 = v1.slice(v1);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR: