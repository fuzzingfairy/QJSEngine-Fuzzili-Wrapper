function main() { 
const v0 = {};
const v1 = [v0,v0];
v0.__proto__ = v1;
const v3 = {};
const v4 = [v3,v3,v0,v3];
const v6 = [v4];
const v7 = "symbol".substring;
const v8 = Reflect.apply(v7,v4,v6);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
