function main() { 
const v2 = Object();
function v3(v4,v5) {
}
const v7 = new Promise(v3);
const v9 = [v2,v2,v7,"bigint"];
const v10 = Promise.race;
const v11 = Reflect.apply(v10,v7,v9);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
