function main() { 
function v1(v2) {
}
const v4 = {};
const v5 = [v4];
const v6 = [v1];
const v7 = Promise.reject;
const v8 = Reflect.apply(v7,v5,v6);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
