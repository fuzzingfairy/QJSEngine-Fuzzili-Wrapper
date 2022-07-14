function main() { 
function v1(v2,v3) {
}
const v5 = new Promise(v1);
const v6 = Object();
const v8 = [v6];
const v9 = Promise.reject;
const v10 = Reflect.apply(v9,v5,v8);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
