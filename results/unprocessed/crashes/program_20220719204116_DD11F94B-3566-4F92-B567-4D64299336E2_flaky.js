function main() { 
const v2 = Object();
const v3 = [Infinity,Infinity,Infinity];
v3[3] = v3;
const v4 = v3 in v2;
const v5 = {"has":Object};
const v6 = Proxy;
const v7 = isNaN;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
