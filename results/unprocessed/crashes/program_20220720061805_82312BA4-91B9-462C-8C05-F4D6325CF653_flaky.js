function main() { 
const v0 = {};
const v1 = [v0,v0,v0,v0,v0];
const v3 = [127,127,v0,127,127];
const v4 = 6678;
v0.__proto__ = v1;
const v5 = v1();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
