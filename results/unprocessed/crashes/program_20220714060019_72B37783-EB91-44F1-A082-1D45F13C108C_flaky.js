function main() { 
const v1 = "matchAll";
const v2 = {};
const v3 = [v2,v2];
v2.__proto__ = v3;
const v4 = Object;
const v5 = v3 >>> "match";
const v6 = Object;
const v7 = {};
const v8 = Object;
const v10 = Object();
const v11 = Object;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
