function main() { 
function v0(v1,v2) {
}
const v4 = new Promise(v0);
const v5 = {};
const v6 = [v5,v5,v5];
const v8 = Object();
const v10 = [v4,v6,v6];
const v11 = Promise.race;
const v12 = Reflect.apply(v11,v8,v10);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
