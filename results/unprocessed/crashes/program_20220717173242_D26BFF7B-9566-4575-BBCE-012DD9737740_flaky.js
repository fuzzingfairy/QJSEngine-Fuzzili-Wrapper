function main() { 
const v1 = {};
const v2 = [v1,v1,v1,v1];
const v6 = Object();
const v8 = [Object,Object,Object,v2,Object];
const v9 = Promise.race;
const v10 = Reflect.apply(v9,v6,v8);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
