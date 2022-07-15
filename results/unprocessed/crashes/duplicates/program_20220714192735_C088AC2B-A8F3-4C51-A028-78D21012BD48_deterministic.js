function main() { 
const v1 = [3.0,3.0,3.0,3.0,3.0];
const v3 = Object();
v3.__proto__ = v1;
const v7 = Object();
const v8 = v1.unshift(v7,3.0,v1);
const v9 = Object(v3);
const v11 = `-9007199254740991`["startsWith"](Object,v9);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
