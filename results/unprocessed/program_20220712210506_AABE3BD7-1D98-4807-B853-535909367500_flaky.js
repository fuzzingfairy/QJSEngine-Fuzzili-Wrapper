function main() { 
const v1 = Object();
const v2 = {};
function v3(v4) {
}
let v5 = v3;
function v6(v7,v8) {
    v3 = v7;
    v5 = v8;
}
const v11 = Object();
const v12 = new Promise(v6);
const v14 = [1000.0];
const v16 = [v14,v11,v2,Object,v1];
const v17 = Promise.race;
const v18 = Reflect.apply(v17,v12,v16);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
