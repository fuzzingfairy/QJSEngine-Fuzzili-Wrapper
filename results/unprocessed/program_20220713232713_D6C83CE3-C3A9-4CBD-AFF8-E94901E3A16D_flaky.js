function main() { 
const v3 = Object();
const v5 = [6,6];
const v7 = [Object,Object,v3,Object];
const v8 = Promise.race;
const v9 = Reflect.apply(v8,v5,v7);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
