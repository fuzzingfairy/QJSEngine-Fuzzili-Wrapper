function main() { 
const v1 = Object();
const v4 = [9];
const v6 = [v1,v1,v4];
const v7 = Promise.all;
const v8 = Reflect.apply(v7,v4,v6);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
