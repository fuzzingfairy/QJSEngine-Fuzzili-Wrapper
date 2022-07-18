function main() { 
const v1 = {};
const v3 = Object();
const v5 = [v1];
const v6 = Promise.reject;
const v7 = Reflect.apply(v6,v3,v5);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
