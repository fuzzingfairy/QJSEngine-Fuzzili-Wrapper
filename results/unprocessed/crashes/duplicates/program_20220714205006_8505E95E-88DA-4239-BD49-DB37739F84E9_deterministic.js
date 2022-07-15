function main() { 
const v1 = {};
const v3 = [v1,Promise,v1,Promise];
const v4 = Promise.all;
const v5 = Reflect.apply(v4,v1,v3);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
