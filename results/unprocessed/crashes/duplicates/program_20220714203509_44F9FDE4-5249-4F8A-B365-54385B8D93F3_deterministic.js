function main() { 
const v1 = [10000,10000,10000,10000];
const v3 = [10000,10000,v1];
const v4 = v1.splice;
const v5 = Reflect.apply(v4,v1,v3);
const v6 = ~v1;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
