function main() { 
const v1 = {};
const v2 = [v1,v1,v1,v1,v1];
const v3 = [,v2,v2,v1,...v2];
v2[7] = v2;
const v4 = v3 << v2;
const v5 = {};
const v8 = Int8Array(34282);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
