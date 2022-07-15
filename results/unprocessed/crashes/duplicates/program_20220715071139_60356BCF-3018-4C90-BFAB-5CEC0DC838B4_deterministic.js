function main() { 
const v3 = Object();
const v5 = Object();
const v7 = [v3,Object,Promise,Object];
const v8 = Promise.race;
const v9 = Reflect.apply(v8,v5,v7);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
