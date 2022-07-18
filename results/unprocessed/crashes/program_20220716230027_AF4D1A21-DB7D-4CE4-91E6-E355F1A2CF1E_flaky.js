function main() { 
const v0 = {};
const v1 = [v0,v0];
const v2 = {};
const v5 = {};
const v7 = [v1,Object,v2,v5,v2];
const v8 = Promise.all;
const v9 = Reflect.apply(v8,v2,v7);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
