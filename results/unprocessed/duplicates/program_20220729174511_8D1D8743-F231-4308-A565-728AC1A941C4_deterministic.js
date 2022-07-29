function main() { 
const v0 = {};
const v1 = [v0,v0,v0];
const v3 = [1.0,1.0,1.0,1.0,1.0];
const v8 = Object();
const v9 = [,"function",Object,v0,v0,v3,Object,v8];
v0.__proto__ = v1;
const v10 = v9();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
