function main() { 
const v0 = {};
const v1 = [v0,v0];
v0.__proto__ = v1;
const v3 = [2147483649,2147483649,2147483649];
const v4 = `2${v3}h0zGcI0M1T${2147483649}symbol${v0}a${v1}9007199254740991`;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
