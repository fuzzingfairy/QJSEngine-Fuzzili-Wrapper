function main() { 
const v1 = [-193959.206607152,-193959.206607152,-193959.206607152,-193959.206607152];
const v2 = {};
const v3 = [v2,v2];
v2.__proto__ = v3;
const v5 = parseInt(v1,v2);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
