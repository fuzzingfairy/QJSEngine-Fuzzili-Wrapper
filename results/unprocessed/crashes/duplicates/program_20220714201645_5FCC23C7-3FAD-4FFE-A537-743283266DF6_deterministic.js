function main() { 
const v1 = [Infinity,Infinity,Infinity,Infinity];
const v3 = v1["splice"](Infinity,"splice",v1);
throw v1;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
