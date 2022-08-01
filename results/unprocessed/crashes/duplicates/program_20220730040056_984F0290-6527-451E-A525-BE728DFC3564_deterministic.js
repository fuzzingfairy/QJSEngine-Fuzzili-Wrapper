function main() { 
const v0 = {};
const v1 = [v0,v0,v0,v0];
const v5 = Object();
const v6 = Object();
const v7 = {};
const v9 = [v1,v6,v5,v5];
const v10 = Promise.race;
const v11 = Reflect.apply(v10,v7,v9);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
