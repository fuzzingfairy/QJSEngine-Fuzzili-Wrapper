function main() { 
const v1 = Object();
const v2 = Object();
const v5 = Object();
const v7 = Object();
const v9 = [v2,v1,v5];
const v10 = Promise.all;
const v11 = Reflect.apply(v10,v7,v9);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
