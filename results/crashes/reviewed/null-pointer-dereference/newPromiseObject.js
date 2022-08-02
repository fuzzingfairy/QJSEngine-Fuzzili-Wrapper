function main() { 
const v7 = Promise.resolve;
const v8 = Reflect.apply(v7,{},{});
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
