function main() { 
const v0 = {};
const v1 = [v0];
v0.__proto__ = v1;
const v2 = [v0,v0,v0,v1,v0,v1,v0,v1,v0];
const v4 = [-2235168254];
const v6 = Object();
const v8 = Object();
const v9 = v2 in Object;
const v10 = -867446.2602345844;
const v12 = Object();
const v13 = Object in v4;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
