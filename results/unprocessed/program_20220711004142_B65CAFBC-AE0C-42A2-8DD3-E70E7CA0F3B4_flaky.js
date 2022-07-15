function main() { 
let v0 = {};
const v1 = [v0,v0,v0,v0];
v0 = v1;
const v3 = v0["unshift"](v1,v1);
const v4 = Object;
const v5 = v3 * v1;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
