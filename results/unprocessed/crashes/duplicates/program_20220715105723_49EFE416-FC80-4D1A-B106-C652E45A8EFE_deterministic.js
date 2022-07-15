function main() { 
const v2 = [Promise];
const v3 = Promise.reject;
const v4 = Reflect.apply(v3,Reflect,v2);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
