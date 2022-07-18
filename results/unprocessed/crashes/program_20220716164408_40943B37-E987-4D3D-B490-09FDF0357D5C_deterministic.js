function main() { 
const v2 = Object();
const v3 = /7\s/ig;
const v5 = [v2];
const v6 = Promise.resolve;
const v7 = Reflect.apply(v6,v3,v5);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
