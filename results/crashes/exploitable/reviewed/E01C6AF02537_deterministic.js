function main() { 
const v1 = [-1.0,-1.0,-1.0];
v1[4] = v1;
const v3 = v1["indexOf"](-1.0,v1);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
