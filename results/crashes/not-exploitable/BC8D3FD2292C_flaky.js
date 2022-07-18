function main() { 
const v1 = Object();
const v3 = new Int8Array();
const v6 = [v3];
const v7 = Promise.reject;
const v8 = Reflect.apply(v7,v1,v6);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
