function main() { 
const v2 = Object();
const v3 = new Int32Array();
const v6 = [v3];
const v7 = Promise.reject;
const v8 = Reflect.apply(v7,v2,v6);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
