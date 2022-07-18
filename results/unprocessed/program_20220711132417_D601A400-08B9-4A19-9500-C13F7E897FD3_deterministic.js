function main() { 
const v1 = [2.0];
const v4 = Object();
const v6 = [v1];
const v7 = Promise.resolve;
const v8 = Reflect.apply(v7,v4,v6);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
