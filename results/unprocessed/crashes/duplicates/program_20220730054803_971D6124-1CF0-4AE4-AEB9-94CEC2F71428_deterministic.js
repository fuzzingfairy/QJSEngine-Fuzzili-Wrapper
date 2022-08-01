function main() { 
const v2 = Object();
const v4 = Object();
const v6 = [v4];
const v7 = Promise.reject;
const v8 = Reflect.apply(v7,v2,v6);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
