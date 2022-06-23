function main() { 
const v1 = Object();
const v4 = Object();
const v5 = Object();
const v7 = [v1,v4];
const v8 = Promise.all;
const v9 = Reflect.apply(v8,v5,v7);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
