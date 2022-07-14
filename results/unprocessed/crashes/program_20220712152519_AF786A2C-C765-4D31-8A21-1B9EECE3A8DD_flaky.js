function main() { 
const v1 = [6,6,6];
const v2 = v1.unshift(6,v1);
throw v1;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
