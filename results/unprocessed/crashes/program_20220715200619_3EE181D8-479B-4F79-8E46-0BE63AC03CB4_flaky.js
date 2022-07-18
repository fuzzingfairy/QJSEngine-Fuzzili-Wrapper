function main() { 
const v1 = {};
const v2 = [v1];
const v4 = {};
v1.__proto__ = v2;
const v6 = Object();
const v7 = Object(v2,v2,Object,v2,v4);
const v8 = Object >> v2;
const v9 = Object;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
