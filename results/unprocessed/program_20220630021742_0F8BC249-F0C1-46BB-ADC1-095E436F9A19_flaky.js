function main() { 
const v0 = {};
const v1 = [v0,v0,v0,v0];
const v2 = "CP6iwGOIPC";
let [,v3,v4] = v1;
v3.__proto__ = v1;
const v5 = -v4;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
