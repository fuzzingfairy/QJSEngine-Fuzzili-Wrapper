function main() { 
const v0 = /\Wo\D/myu;
const v1 = [v0,v0];
v1[0] = v1;
const v2 = v1();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
