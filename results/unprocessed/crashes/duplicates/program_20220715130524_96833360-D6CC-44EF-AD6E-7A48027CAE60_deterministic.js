function main() { 
const v1 = /S\w/umg;
const v2 = {};
const v3 = [v2,v2];
const v5 = [v2,v2,v3];
const v6 = Promise.all;
const v7 = Reflect.apply(v6,v1,v5);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
