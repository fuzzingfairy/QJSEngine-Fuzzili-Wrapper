function main() { 
const v0 = {};
const v2 = [v0,v0,v0,v0,v0];
const v3 = {};
const v5 = [v2];
const v6 = Promise.reject;
const v7 = Reflect.apply(v6,v3,v5);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
