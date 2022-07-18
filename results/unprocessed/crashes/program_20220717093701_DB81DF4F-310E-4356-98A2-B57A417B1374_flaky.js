function main() { 
const v1 = Object();
function v2(v3,v4) {
}
const v6 = new Promise(v2);
const v9 = [Promise,Promise,"symbol",Object,v6];
const v10 = Promise.race;
const v11 = Reflect.apply(v10,v1,v9);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
