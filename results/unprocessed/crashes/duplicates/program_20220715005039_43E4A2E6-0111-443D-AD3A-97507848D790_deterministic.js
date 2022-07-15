function main() { 
const v1 = Object();
const v3 = {};
const v4 = [v3];
const v6 = Object();
const v8 = [v4,v6,v4];
const v9 = Promise.all;
const v10 = Reflect.apply(v9,v1,v8);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
