function main() { 
const v2 = Object();
const v5 = Object();
const v6 = [v5];
const v7 = Promise.resolve;
const v8 = Reflect.apply(v7,v2,v6);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
