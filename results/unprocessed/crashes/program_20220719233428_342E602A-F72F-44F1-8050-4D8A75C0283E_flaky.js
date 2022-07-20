function main() { 
function v0(v1,v2) {
}
const v4 = new Promise(v0);
const v6 = Promise["resolve"]();
const v8 = [v6];
const v9 = Promise.reject;
const v10 = Reflect.apply(v9,v4,v8);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
