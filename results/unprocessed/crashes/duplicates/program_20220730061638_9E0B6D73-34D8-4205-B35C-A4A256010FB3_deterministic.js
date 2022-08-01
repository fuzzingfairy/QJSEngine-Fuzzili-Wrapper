function main() { 
const v1 = [-2.2250738585072014e-308];
const v3 = v1.fill;
const v4 = v1.reduceRight(v3,Reflect);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
