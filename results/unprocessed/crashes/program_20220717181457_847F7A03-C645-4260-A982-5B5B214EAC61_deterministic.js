function main() { 
const v1 = {};
const v3 = [v1];
const v4 = Promise.reject;
const v5 = Reflect.apply(v4,v1,v3);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
