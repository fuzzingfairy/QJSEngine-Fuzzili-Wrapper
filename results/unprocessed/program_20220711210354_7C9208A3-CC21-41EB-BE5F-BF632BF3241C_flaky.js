function main() { 
const v0 = {};
const v1 = [v0,v0,v0,v0];
const v2 = 1429251764;
v1[1] = v1;
throw v1;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
