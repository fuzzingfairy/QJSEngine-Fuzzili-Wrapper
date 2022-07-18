function main() { 
const v1 = Object();
const v2 = {};
const v4 = Object();
const v5 = [v2,v2,v2];
v5[0] = v5;
const v6 = v5 | v1;
const v7 = Reflect;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
