function main() { 
const v1 = [-192790.6784284492];
v1[4] = v1;
const v2 = v1 == -192790.6784284492;
const v3 = v2 ? v1 : -192790.6784284492;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
