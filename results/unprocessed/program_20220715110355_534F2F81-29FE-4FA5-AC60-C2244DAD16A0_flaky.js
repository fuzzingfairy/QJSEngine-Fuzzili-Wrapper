function main() { 
const v1 = [260105.300131134,260105.300131134,260105.300131134,260105.300131134,260105.300131134];
const v2 = [v1];
v1[0] = v1;
const v3 = v2();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
