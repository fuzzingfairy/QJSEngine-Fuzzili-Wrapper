function main() { 
const v2 = {};
const v3 = [v2,v2,v2];
const v5 = [Object];
const v6 = Promise.reject;
const v7 = Reflect.apply(v6,v3,v5);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
