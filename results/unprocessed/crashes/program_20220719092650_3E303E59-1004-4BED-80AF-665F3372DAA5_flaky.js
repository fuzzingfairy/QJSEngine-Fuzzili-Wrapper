function main() { 
const v0 = {};
const v1 = [v0,v0,v0];
const v2 = [v0];
const v5 = Object(v0);
v5.__proto__ = v2;
const v6 = Symbol(v1);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
