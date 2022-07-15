function main() { 
let v1 = [-3207017195,-3207017195,-3207017195,-3207017195];
const v2 = {};
const v3 = [v2,v1,v2,v2,v2];
v1[0] = v3;
v1 >>>= Object;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
