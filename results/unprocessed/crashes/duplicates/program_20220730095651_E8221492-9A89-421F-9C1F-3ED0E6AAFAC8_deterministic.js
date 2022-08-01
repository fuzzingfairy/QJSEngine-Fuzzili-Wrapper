function main() { 
const v1 = Object();
const v4 = Object();
const v6 = [v4];
const v7 = Promise.resolve;
const v8 = Reflect.apply(v7,v1,v6);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
