function main() { 
const v1 = Object();
function v2(v3) {
}
function v4(v5,v6) {
}
const v8 = new Promise(v4);
const v10 = Object();
const v12 = [v8,v8,v1,v10];
const v13 = Promise.race;
const v14 = Reflect.apply(v13,v1,v12);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
