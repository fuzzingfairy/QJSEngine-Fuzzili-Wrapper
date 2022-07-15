function main() { 
const v0 = {};
const v2 = [v0];
const v5 = Object();
const v7 = [Object,v2,"function",v5,v0];
const v8 = Promise.all;
const v9 = Reflect.apply(v8,v0,v7);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
