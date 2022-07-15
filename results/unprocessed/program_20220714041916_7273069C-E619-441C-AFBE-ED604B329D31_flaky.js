function main() { 
const v3 = Object();
const v4 = Object;
const v6 = [Object];
const v7 = Promise.resolve;
const v8 = Reflect.apply(v7,v3,v6);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
