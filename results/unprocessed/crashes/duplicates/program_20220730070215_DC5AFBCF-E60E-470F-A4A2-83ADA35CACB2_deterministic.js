function main() { 
const v2 = Object();
const v5 = [v2];
const v6 = Promise.resolve;
const v7 = Reflect.apply(v6,Math,v5);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
