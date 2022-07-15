function main() { 
const v1 = [1000000000000.0,1000000000000.0];
v1[0] = v1;
const v4 = new Int16Array(55514);
v4[8] = v1;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
