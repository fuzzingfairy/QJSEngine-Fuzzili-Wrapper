function main() { 
const v0 = {};
const v1 = [v0,v0,v0];
let {"__proto__":v2,"length":v3,"search":v4,} = v1;
v0.__proto__ = v1;
v2[v4] >>= v1;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
