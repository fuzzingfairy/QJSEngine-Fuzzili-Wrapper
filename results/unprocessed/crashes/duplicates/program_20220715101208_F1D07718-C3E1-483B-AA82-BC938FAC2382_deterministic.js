function main() { 
const v1 = Object();
const v7 = [Object,Object,Object,Object];
const v8 = Promise.race;
const v9 = Reflect.apply(v8,v1,v7);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
