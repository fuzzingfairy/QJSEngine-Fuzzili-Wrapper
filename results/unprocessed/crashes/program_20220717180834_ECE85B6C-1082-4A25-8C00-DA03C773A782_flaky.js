function main() { 
const v0 = {};
function v1(v2) {
}
function v3(v4,v5) {
    v1 = v4;
}
const v7 = new Promise(v3);
const v8 = [v0,v0,v0];
const v9 = {};
const v11 = [v7];
const v12 = Promise.reject;
const v13 = Reflect.apply(v12,v9,v11);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
