function main() { 
const v0 = {};
const v1 = [v0,v0,v0,v0,v0];
const v2 = {};
const v6 = Object();
const v8 = ["symbol",v6,v2,v2,v0];
const v9 = Promise.all;
const v10 = Reflect.apply(v9,v1,v8);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
