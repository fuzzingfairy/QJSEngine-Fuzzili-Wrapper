function main() { 
const v1 = {};
const v3 = [1000,1000,1000,Promise];
const v5 = [v3];
const v6 = Promise.reject;
const v7 = Reflect.apply(v6,v1,v5);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
