function main() { 
const v0 = {};
const v1 = [v0,v0];
const v2 = v0 !== v0;
let v3 = v2 ? v1 : v0;
v0.__proto__ = v1;
v3 = v0;
const v5 = v0 > "keys";
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
