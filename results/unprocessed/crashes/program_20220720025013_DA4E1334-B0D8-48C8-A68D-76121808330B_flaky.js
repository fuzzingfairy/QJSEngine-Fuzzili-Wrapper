function main() { 
const v2 = {};
const v3 = [v2,v2];
const v6 = RangeError();
v2.__proto__ = v3;
const v7 = Object(v3,"boolean",v6,434543.95250171213);
const v8 = v7();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
