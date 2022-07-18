function main() { 
const v0 = {};
const v1 = {"c":v0,"d":v0,"e":v0,"toString":v0};
const v2 = [v0,v0,v0,v0];
v0.__proto__ = v2;
v1[v0] >>>= v2;
const v3 = Object;
const v5 = [39669461,39669461,39669461,39669461];
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
