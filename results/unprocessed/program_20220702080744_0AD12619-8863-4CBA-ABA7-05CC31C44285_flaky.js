function main() { 
const v0 = 16;
const v2 = Object();
const v4 = Object();
const v5 = {};
const v6 = [v5];
const v9 = [Promise,v6,v5,v4];
const v10 = Promise.all;
const v11 = Reflect.apply(v10,v2,v9);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
