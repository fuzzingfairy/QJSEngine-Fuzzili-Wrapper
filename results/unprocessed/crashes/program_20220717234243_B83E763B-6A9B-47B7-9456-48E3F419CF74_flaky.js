function main() { 
const v0 = {};
const v1 = [v0];
const v3 = [-65536,-65536,-65536];
function v4(v5) {
}
let v6 = v4;
function v7(v8,v9) {
    v4 = v8;
    v6 = v9;
}
const v11 = new Promise(v7);
const v12 = {};
const v14 = Symbol.iterator;
const v16 = Object();
const v17 = [v12,v12];
const v18 = {};
const v20 = [v1,v17,Symbol];
const v21 = Promise.all;
const v22 = Reflect.apply(v21,v17,v20);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
