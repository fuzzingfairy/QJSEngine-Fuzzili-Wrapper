function main() { 
const v0 = {};
const v1 = [v0,v0,v0,v0];
const v2 = {};
const v4 = [v2,v2,v2,v2];
const v6 = [v1];
const v7 = Promise.resolve;
const v8 = Reflect.apply(v7,v4,v6);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
