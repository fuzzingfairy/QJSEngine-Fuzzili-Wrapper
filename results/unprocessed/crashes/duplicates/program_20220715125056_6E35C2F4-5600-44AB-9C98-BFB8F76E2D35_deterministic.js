function main() { 
const v1 = [NaN];
const v2 = {};
const v3 = [v2,v2,v2,v2,v1];
const v6 = [v3,v1,v3,v1];
const v7 = Promise.all;
const v8 = Reflect.apply(v7,v1,v6);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
