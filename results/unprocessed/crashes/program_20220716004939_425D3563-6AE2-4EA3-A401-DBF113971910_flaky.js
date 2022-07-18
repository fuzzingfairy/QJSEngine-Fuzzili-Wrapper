function main() { 
const v0 = {};
const v1 = [v0,v0,v0,v0];
v0.__proto__ = v1;
"buffer"[v0] -= 1.7976931348623157e+308;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
