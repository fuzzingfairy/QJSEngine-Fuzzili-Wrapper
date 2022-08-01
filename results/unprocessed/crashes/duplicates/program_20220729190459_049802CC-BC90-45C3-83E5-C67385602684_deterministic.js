function main() { 
const v1 = [-3997188874];
const v2 = {};
const v3 = [v1,v2,v2];
let v4 = {};
v4 = v3;
v1[7] = v4;
const v5 = v1.defineProperty();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
