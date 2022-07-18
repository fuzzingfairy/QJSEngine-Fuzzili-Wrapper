function main() { 
const v1 = [-784858404,-784858404,-784858404];
const v2 = [v1,v1,v1];
v1[0] = v2;
throw v2;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
