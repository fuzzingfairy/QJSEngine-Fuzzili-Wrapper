function main() { 
const v1 = {};
const v3 = Object();
const v5 = [v3];
const v6 = Promise.resolve;
const v7 = Reflect.apply(v6,v1,v5);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR: