function main() { 
const v1 = {};
const v4 = [0];
const v5 = Promise.resolve;
const v6 = Reflect.apply(v5,v1,v4);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
