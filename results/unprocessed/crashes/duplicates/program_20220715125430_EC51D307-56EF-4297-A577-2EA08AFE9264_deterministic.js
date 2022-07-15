function main() { 
const v0 = {};
const v1 = [v0,v0,v0,v0,v0];
const v3 = [Promise,v0];
const v5 = [v3,v3,v1,v1,v0];
const v6 = Promise.all;
const v7 = Reflect.apply(v6,v3,v5);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
