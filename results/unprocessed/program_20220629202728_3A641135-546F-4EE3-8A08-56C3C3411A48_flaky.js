function main() { 
const v0 = {};
const v1 = [v0,v0,v0,v0];
v0.__proto__ = v1;
let v3 = [65535];
v3 **= v1;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
