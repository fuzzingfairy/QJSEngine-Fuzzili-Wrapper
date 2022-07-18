function main() { 
const v1 = {};
const v3 = Object();
const v4 = [v1,v1,v1,v1];
v4[-0.0] = v4;
const v5 = delete v3[v4];
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
