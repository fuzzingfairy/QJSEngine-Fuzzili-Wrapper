function main() { 
const v0 = {};
const v1 = [v0,v0,v0];
v1[6] = v1;
const v3 = Object();
const v4 = v3 >>> v1;
const v5 = Object;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR: