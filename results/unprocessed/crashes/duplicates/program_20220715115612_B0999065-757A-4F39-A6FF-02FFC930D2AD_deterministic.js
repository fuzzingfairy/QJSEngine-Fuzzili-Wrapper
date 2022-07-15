function main() { 
const v3 = Object();
const v5 = Object();
const v6 = Object();
const v8 = [Object,v6,v5,Promise];
const v9 = Promise.all;
const v10 = Reflect.apply(v9,v3,v8);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
