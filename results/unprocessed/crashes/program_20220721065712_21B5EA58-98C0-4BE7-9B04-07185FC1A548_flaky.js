function main() { 
const v0 = {};
const v1 = [v0,v0,v0,v0,v0];
const v2 = /\W\W\W+/mgi;
const v5 = [v1];
const v6 = Promise.reject;
const v7 = Reflect.apply(v6,v2,v5);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
