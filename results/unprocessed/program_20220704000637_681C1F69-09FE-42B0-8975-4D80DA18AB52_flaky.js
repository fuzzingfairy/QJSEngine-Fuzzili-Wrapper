function main() { 
const v1 = Object();
function v2(v3) {
}
const v6 = [v2];
const v7 = Promise.resolve;
const v8 = Reflect.apply(v7,v1,v6);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
