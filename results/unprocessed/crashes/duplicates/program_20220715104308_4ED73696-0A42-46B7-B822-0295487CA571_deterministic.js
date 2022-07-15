function main() { 
const v0 = {};
const v1 = {"__proto__":v0,"b":v0};
const v2 = [v0,v1,v0];
v0.__proto__ = v2;
const v3 = v2();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
