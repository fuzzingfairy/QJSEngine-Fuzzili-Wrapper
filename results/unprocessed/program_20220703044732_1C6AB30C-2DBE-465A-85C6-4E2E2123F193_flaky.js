function main() { 
const v1 = [1.0,1.0,1.0];
const v2 = {};
const v3 = [v1,v2];
const v4 = Object;
v1[8] = v1;
const v6 = Object();
const v7 = v1();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
