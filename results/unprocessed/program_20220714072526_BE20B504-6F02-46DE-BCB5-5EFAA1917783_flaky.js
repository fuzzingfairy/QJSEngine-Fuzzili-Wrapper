function main() { 
const v0 = {};
const v1 = [v0,v0,v0];
v0.__proto__ = v1;
let [v2,...v3] = v1;
const v5 = 54641 == v2;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
