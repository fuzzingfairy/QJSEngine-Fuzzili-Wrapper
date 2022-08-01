function main() { 
const v2 = [4294967296,4294967296];
const v3 = [4294967296];
const v5 = [v3];
const v6 = Promise.resolve;
const v7 = Reflect.apply(v6,v2,v5);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
