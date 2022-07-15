function main() { 
const v0 = {};
const v1 = [v0,v0,v0,v0,v0];
const v6 = [v1,Object,Object];
const v7 = Promise.all;
const v8 = Reflect.apply(v7,v0,v6);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
