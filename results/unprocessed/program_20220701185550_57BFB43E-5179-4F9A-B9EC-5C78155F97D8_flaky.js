function main() { 
const v1 = [-436020938];
v1[1] = v1;
const v2 = v1();
const v3 = v1.reduceRight();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
