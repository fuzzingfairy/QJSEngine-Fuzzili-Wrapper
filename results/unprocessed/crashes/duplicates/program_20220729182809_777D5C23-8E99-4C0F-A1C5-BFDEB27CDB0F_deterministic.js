function main() { 
const v1 = {};
const v2 = [v1];
const v3 = {};
const v4 = [v3,v3,v2];
const v6 = [v4];
const v7 = Promise.reject;
const v8 = Reflect.apply(v7,v3,v6);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
