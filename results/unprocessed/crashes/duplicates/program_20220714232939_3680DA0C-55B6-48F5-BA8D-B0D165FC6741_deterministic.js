function main() { 
const v1 = [-9007199254740992];
const v2 = v1.unshift(...v1,-9007199254740992,v1);
v1[v1] = -9007199254740992;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
