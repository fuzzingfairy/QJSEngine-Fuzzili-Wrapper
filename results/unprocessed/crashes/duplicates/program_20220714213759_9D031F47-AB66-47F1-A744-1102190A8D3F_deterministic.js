function main() { 
const v0 = {};
const v2 = [v0,v0];
v0.__proto__ = v2;
const v5 = [10];
const v6 = "9007199254740992".codePointAt;
const v7 = Reflect.apply(v6,v0,v5);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
