function main() { 
const v1 = [-2948437113,-2948437113,-2948437113,-2948437113];
const v2 = {};
const v3 = [v1,v2,v2];
v1[1] = v1;
const v5 = v3["flat"]();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
