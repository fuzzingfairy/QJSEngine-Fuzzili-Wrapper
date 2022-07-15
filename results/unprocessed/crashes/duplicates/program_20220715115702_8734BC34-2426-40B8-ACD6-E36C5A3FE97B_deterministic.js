function main() { 
const v5 = Object();
const v6 = Object();
const v7 = Object;
const v9 = [v5,"object",v7,Object];
const v10 = Promise.race;
const v11 = Reflect.apply(v10,v6,v9);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
