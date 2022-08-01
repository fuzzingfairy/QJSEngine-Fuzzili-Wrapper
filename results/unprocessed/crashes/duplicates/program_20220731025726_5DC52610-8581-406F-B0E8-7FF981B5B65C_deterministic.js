function main() { 
const v2 = Object();
const v5 = [Object];
const v6 = Promise.resolve;
const v7 = Reflect.apply(v6,v2,v5);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
