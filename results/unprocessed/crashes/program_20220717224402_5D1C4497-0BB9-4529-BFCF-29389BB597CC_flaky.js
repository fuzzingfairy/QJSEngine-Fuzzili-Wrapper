function main() { 
const v1 = {};
const v2 = [v1,v1,v1];
const v4 = [Promise,v1];
const v5 = Promise.race;
const v6 = Reflect.apply(v5,v2,v4);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
