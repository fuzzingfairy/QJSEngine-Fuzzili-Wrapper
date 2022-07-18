function main() { 
const v1 = Object();
const v3 = Object();
const v4 = {};
const v6 = [v4,v4];
const v8 = [Promise,v1,v3];
const v9 = Promise.all;
const v10 = Reflect.apply(v9,v6,v8);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
