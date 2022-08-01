function main() { 
const v0 = {};
const v1 = {};
const v2 = [v1];
const v5 = [v0];
const v6 = Promise.resolve;
const v7 = Reflect.apply(v6,v2,v5);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
