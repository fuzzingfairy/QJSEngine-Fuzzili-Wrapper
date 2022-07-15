function main() { 
const v1 = [129,129,129,129];
const v2 = [129,129];
const v3 = v1.copyWithin;
const v4 = v2.reduce(v3);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
