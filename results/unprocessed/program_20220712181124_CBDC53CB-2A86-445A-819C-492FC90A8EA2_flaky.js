function main() { 
const v1 = [4294967295,4294967295,4294967295,4294967295];
const v2 = [4294967295,4294967295];
const v5 = [v2,v1];
const v6 = Promise.race;
const v7 = Reflect.apply(v6,v2,v5);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
