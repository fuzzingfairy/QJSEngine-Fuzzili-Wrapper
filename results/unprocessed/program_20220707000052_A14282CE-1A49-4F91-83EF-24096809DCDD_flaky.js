function main() { 
const v0 = {};
let v1 = [v0,v0,v0,v0,v0];
v0.__proto__ = v1;
const v2 = v1++;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR: