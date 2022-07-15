function main() { 
const v0 = {};
const v2 = [v0,v0,v0,v0,v0];
const v4 = [v2];
const v5 = Promise.race;
const v6 = Reflect.apply(v5,v2,v4);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
