function main() { 
const v2 = Object();
const v4 = [v2];
const v5 = Promise.all;
const v6 = Reflect.apply(v5,v2,v4);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
