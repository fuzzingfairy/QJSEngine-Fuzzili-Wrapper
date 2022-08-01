function main() { 
function v1(v2,v3) {
}
const v4 = new Promise(v1);
const v6 = [v4,v4,v4,v4,v4];
const v7 = Promise.all;
const v8 = Reflect.apply(v7,v4,v6);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
