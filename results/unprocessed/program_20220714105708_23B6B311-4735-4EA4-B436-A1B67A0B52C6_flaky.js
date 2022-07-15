function main() { 
const v1 = Object();
const v3 = {};
const v4 = 0;
const v5 = 2;
const v7 = [v3];
const v8 = Promise.reject;
const v9 = Reflect.apply(v8,v1,v7);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
