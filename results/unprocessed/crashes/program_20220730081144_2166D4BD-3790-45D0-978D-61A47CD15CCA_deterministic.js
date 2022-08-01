function main() { 
const v0 = {};
const v1 = [v0];
function v2(v3,v4) {
}
const v6 = new Promise(v2);
const v8 = [v6,v6,v6];
const v9 = Promise.all;
const v10 = Reflect.apply(v9,v1,v8);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
