function main() { 
function v0(v1,v2) {
}
const v4 = new Promise(v0);
const v5 = {};
const v6 = [v5];
const v8 = Object();
const v11 = [v8,,v4,v5];
const v12 = Promise.race;
const v13 = Reflect.apply(v12,v6,v11);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
