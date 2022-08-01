function main() { 
function v0(v1,v2) {
}
const v4 = new Promise(v0);
const v6 = [v4,v4,v4];
const v7 = Promise.race;
const v8 = Reflect.apply(v7,v4,v6);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
