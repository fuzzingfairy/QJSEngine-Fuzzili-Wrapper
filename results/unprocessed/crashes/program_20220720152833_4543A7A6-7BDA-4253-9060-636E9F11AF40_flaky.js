function main() { 
const v0 = {};
const v1 = [v0,v0,v0,v0];
v0.__proto__ = v1;
const v3 = Object();
const v5 = v0();
const v8 = Object();
const v10 = Object();
const v11 = v8();
const v12 = Int16Array();
const v13 = {"__proto__":Object,"constructor":v11,"toString":Int16Array};
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
