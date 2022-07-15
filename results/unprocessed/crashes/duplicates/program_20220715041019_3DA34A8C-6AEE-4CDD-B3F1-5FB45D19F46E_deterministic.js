function main() { 
const v0 = {};
const v2 = [2.0];
const v6 = [Object,Promise,v0,Promise,Promise];
const v7 = Promise.race;
const v8 = Reflect.apply(v7,v2,v6);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
