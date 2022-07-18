function main() { 
const v0 = {};
const v1 = [v0,v0,v0];
v0.__proto__ = v1;
const v2 = v1();
const v4 = 975494.0433031463;
const v5 = -0.0;
const v6 = [-2147483647,-2147483647];
const v8 = v2[-2147483647];
const v9 = Object();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
