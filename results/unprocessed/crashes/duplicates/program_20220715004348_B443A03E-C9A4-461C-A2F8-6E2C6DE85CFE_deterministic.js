function main() { 
const v0 = {};
const v1 = [v0];
v0.__proto__ = v1;
const v3 = [v0];
const v4 = v1.join;
const v5 = Reflect.apply(v4,v1,v3);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
