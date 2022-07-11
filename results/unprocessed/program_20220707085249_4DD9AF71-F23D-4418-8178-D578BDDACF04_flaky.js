function main() { 
const v2 = [835662.0777473457,835662.0777473457];
const v3 = {"apply":Object,"has":Object};
const v5 = new Proxy(v2,v3);
v2[1] = v5;
const v7 = Object[v5];
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
