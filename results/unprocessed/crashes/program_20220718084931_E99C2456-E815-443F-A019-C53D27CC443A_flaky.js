function main() { 
const v0 = 41249;
const v2 = new Int8Array();
function v3(v4) {
}
let v5 = v3;
function v6(v7,v8) {
    v3 = v7;
    v5 = v8;
}
const v10 = new Promise(v6);
const v12 = [v2];
const v13 = Promise.reject;
const v14 = Reflect.apply(v13,v10,v12);
const v16 = Object();
with (v16) {
}
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
