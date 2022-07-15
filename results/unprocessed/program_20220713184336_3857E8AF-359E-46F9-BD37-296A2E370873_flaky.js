function main() { 
const v0 = {};
const v1 = [v0,v0];
const v5 = Object();
const v7 = [Object,v5,Promise,Object];
const v8 = Promise.all;
const v9 = Reflect.apply(v8,v1,v7);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
