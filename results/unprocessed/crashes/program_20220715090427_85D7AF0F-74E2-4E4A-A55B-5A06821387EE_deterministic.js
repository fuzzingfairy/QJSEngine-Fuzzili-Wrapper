function main() { 
const v3 = Object();
const v5 = [-5.0];
const v6 = Promise.resolve;
const v7 = Reflect.apply(v6,v3,v5);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
