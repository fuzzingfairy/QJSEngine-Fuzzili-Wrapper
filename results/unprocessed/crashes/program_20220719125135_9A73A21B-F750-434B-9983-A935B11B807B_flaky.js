function main() { 
const v0 = {};
const v1 = [v0,v0,v0,v0];
v0.__proto__ = v1;
const v2 = Object;
const v4 = [2147483649];
const v6 = [...v4,...v1];
const v7 = isFinite(v6);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
