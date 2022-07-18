function main() { 
const v0 = {};
const v1 = [v0];
v1[1] = v1;
const v3 = Math.exp(v1);
const v4 = [v1];
const v6 = Object();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
