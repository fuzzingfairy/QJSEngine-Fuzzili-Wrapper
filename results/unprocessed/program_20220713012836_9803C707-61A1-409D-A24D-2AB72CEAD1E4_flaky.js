function main() { 
const v2 = Object();
const v3 = {};
const v4 = [v3,v3,v3,v3];
const v6 = [v3,v2];
const v7 = Promise.race;
const v8 = Reflect.apply(v7,v4,v6);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
