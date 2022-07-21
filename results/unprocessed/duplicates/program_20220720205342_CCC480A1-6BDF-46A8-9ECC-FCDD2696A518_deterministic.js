function main() { 
const v1 = {};
const v2 = [v1,v1];
const v5 = [Int32Array];
const v6 = Promise.reject;
const v7 = Reflect.apply(v6,v2,v5);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
