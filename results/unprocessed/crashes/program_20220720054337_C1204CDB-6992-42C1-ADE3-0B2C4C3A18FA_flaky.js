function main() { 
const v0 = {};
const v1 = [v0,v0,v0,v0,v0];
const v2 = {};
const v3 = [v2,v1,v2,v2];
const v4 = 966902908;
v0.__proto__ = v1;
const v5 = v0();
const v6 = Object;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
