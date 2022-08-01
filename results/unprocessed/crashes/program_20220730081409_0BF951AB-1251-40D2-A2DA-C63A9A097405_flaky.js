function main() { 
const v1 = [4.0,4.0,4.0,4.0,4.0];
function v2(v3,v4,v5) {
}
const v7 = {"get":Object,"set":v2};
function v8(v9,v10) {
}
const v12 = new Promise(v8);
const v14 = [v1,v7,v12];
const v15 = Promise.all;
const v16 = Reflect.apply(v15,v12,v14);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
