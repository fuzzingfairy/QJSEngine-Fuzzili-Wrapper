function main() { 
const v1 = Object();
const v4 = [Promise];
const v5 = Promise.reject;
const v6 = Reflect.apply(v5,v1,v4);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
