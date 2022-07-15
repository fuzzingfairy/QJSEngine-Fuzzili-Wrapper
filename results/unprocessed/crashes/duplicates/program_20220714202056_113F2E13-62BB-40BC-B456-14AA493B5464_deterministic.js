function main() { 
const v0 = {};
const v3 = Object();
const v4 = [v0];
const v5 = Object.setPrototypeOf(v0,v4);
const v6 = v3 << v5;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
