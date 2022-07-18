function main() { 
const v1 = {};
const v4 = [Object];
const v5 = Promise.reject;
const v6 = Reflect.apply(v5,v1,v4);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
