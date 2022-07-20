function main() { 
const v1 = [65537];
const v3 = [v1,65537,65537];
const v4 = v1.fill;
v3[268435456] ^= v3;
const v5 = Reflect.apply(v4,v1,v3);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
