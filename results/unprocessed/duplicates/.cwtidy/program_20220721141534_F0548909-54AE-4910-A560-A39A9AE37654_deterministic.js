function main() { 
const v0 = {};
const v3 = [5.0,5.0,5.0,5.0];
const v5 = [Promise,v3];
const v6 = Promise.race;
const v7 = Reflect.apply(v6,v0,v5);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR: