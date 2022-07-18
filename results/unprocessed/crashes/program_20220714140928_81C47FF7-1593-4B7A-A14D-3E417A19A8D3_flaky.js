function main() { 
const v2 = Object();
const v4 = Object();
const v7 = Object();
const v9 = Object();
const v11 = [v9,v2,Object,v4,Object];
const v12 = Promise.race;
const v13 = Reflect.apply(v12,v7,v11);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
