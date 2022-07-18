function main() { 
const v0 = {};
const v1 = {};
const v2 = [v0,v1];
v0.__proto__ = v2;
const v3 = [v0];
const v5 = v3();
const v6 = "bigint"();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
