function main() { 
const v1 = ["CGaH8AN6fu"];
const v2 = {};
const v3 = [v2,v2];
const v4 = {};
const v5 = [v3,v4,v4,v4,v4];
v2.__proto__ = v5;
const v7 = Object();
const v8 = v7 << v2;
v1.length = 0;
const v11 = Object();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
