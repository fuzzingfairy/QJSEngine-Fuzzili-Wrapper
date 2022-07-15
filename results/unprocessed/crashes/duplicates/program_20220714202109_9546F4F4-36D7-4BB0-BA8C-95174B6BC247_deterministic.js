function main() { 
function v0(v1,v2) {
}
const v4 = new Promise(v0);
const v6 = [10,10,10,10,10];
const v8 = [Promise,v6,Promise];
const v9 = Promise.race;
const v10 = Reflect.apply(v9,v4,v8);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
