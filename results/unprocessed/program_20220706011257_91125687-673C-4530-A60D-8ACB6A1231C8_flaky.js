function main() { 
const v0 = {};
const v2 = [v0,v0,v0];
const v4 = Object();
const v6 = Object();
const v8 = [v4];
const v9 = Promise.all;
const v10 = Reflect.apply(v9,v2,v8);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
