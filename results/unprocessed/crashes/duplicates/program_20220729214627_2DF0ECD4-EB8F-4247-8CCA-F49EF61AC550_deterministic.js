function main() { 
const v1 = {};
const v2 = [v1,v1,v1,v1];
const v5 = {};
const v6 = [v5,v5,v5];
v1.__proto__ = v2;
v6[9007199254740991] *= v2;
const v7 = [v6,gc,683430.2298118297,v1,Date];
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
