function main() { 
const v1 = Promise;
const v3 = Object();
const v5 = [Promise];
const v6 = v1.reject;
const v7 = Reflect.apply(v6,v3,v5);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
