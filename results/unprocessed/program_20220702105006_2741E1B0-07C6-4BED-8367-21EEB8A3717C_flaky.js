function main() { 
const v2 = /\d/yg;
const v3 = Object.getOwnPropertySymbols(v2);
const v5 = [Object];
const v6 = Promise.race;
const v7 = Reflect.apply(v6,v3,v5);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
