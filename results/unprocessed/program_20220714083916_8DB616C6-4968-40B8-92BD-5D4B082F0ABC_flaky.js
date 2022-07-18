function main() { 
const v0 = {};
const v3 = Object();
const v5 = [v3];
const v6 = Promise.race;
const v7 = Reflect.apply(v6,v0,v5);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
