function main() { 
const v1 = Object();
const v3 = Object();
const v6 = [v1,v1,Promise];
const v7 = Promise.race;
const v8 = Reflect.apply(v7,v3,v6);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
