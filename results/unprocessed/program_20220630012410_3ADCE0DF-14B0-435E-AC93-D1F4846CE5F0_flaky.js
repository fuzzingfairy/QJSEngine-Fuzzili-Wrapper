function main() { 
const v1 = [Infinity];
let v2 = {};
const v3 = [v2,v2];
v2.__proto__ = v3;
const v4 = v2--;
const v5 = v1 === v3;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR: