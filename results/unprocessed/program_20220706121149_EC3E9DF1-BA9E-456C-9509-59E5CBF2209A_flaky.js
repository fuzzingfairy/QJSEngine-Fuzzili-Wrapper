function main() { 
const v0 = {};
const v1 = [v0,v0,v0];
const v3 = Object();
function v4(v5,v6) {
}
const v8 = new Promise(v4);
const v9 = {};
const v10 = [v9,v9,v9,v9];
const v12 = [v10,v3,v3,v3,v1];
const v13 = Promise.all;
const v14 = Reflect.apply(v13,v8,v12);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
