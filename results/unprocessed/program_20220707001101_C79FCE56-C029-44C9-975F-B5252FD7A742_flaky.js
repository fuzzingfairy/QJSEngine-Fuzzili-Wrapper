function main() { 
const v0 = {};
const v1 = [v0,v0,v0,v0];
const v5 = [Object,v1,Promise];
const v6 = Promise.all;
const v7 = Reflect.apply(v6,v1,v5);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
