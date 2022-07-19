function main() { 
const v0 = {};
const v1 = [v0,v0];
v1[8] = v1;
v1.constructor /= v1;
const v2 = Object;
const v3 = Date;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
