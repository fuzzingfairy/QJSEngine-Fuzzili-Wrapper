function main() { 
const v1 = Object();
const v5 = [Object];
const v6 = Promise.all;
const v7 = Reflect.apply(v6,v1,v5);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
