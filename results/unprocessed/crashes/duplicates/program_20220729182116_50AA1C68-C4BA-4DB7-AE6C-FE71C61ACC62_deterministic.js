function main() { 
const v0 = {};
const v1 = [v0];
v0.__proto__ = v1;
const v2 = {};
let [v3,...v4] = v1;
const v5 = v2 >= v3;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
