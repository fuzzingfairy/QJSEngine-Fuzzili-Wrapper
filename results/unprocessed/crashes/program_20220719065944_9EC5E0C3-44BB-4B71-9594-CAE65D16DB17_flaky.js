function main() { 
const v1 = [-2.0,-2.0,-2.0,-2.0,-2.0];
v1[1] = v1;
const v3 = Object();
const v4 = [v1,v1,v3,v1,v1];
const v5 = v4();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
