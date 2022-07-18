function main() { 
const v0 = {};
const v1 = [v0,v0,v0,v0,v0];
const v3 = Object.setPrototypeOf(v0,v1);
const v5 = Object();
const v6 = delete v5[v1];
const v7 = Object;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
