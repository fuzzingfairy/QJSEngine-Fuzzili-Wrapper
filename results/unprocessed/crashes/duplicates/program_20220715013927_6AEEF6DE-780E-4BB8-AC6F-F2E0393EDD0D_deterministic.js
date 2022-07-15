function main() { 
const v1 = [-2147483648,-2147483648,-2147483648];
const v3 = Object();
const v6 = Object();
const v8 = [Object,Object,Promise,v6,v1];
const v9 = Promise.all;
const v10 = Reflect.apply(v9,v3,v8);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
