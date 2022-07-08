function main() { 
const v2 = Object();
const v4 = [-1.7976931348623157e+308];
const v6 = [v2];
const v7 = Promise.reject;
const v8 = Reflect.apply(v7,v4,v6);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
