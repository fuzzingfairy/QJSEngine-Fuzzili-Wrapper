function main() { 
const v0 = {};
const v1 = [v0,v0];
const v5 = [1073741824];
const v6 = Promise.resolve;
const v7 = Reflect.apply(v6,v1,v5);
const v9 = Symbol.toStringTag;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
