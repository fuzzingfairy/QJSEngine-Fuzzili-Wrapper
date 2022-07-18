function main() { 
const v1 = [-9007199254740993];
const v5 = Object();
const v7 = ["bigint",v5,v5];
const v8 = Promise.all;
const v9 = Reflect.apply(v8,v1,v7);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
