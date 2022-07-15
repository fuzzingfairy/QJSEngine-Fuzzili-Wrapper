function main() { 
const v2 = [1.7976931348623157e+308];
const v4 = [Promise];
const v5 = Promise.reject;
const v6 = Reflect.apply(v5,v2,v4);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
