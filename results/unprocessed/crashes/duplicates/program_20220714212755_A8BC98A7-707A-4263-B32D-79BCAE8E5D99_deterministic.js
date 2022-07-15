function main() { 
const v3 = Object();
const v5 = Object();
const v7 = [Object,v5];
const v8 = Promise.race;
const v9 = Reflect.apply(v8,v3,v7);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
