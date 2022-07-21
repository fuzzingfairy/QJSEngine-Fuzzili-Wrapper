function main() { 
function v0(v1,v2) {
}
const v4 = new Promise(v0);
const v5 = {};
const v7 = [v5,v5,v5,v4,v4];
const v8 = Promise.race;
const v9 = Reflect.apply(v8,v5,v7);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
