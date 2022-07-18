function main() { 
const v3 = Object();
const v5 = [v3,Object,v3,Promise,Object];
const v6 = Promise.race;
const v7 = Reflect.apply(v6,v3,v5);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
