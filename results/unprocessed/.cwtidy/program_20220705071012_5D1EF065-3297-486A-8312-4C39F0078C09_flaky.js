function main() { 
const v1 = [-75736012,-75736012];
v1[4] = v1;
const v2 = {};
const v3 = [v2,v2,v2,v2];
const v4 = delete v3[v1];
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
