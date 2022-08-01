function main() { 
const v0 = {};
const v1 = [v0];
function v3() {
}
const v5 = [v3];
const v6 = Promise.resolve;
const v7 = Reflect.apply(v6,v1,v5);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
