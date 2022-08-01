function main() { 
const v2 = {};
const v4 = [Object];
const v5 = Promise.resolve;
const v6 = Reflect.apply(v5,v2,v4);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
