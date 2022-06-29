function main() { 
const v0 = {};
const v3 = Object();
const v6 = [Object,v3,v0];
const v7 = Promise.all;
const v8 = Reflect.apply(v7,v3,v6);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
