function main() { 
const v0 = {};
const v1 = [v0];
const v2 = 15239;
v0.__proto__ = v1;
const v4 = v0["asinh"]("asinh");
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
