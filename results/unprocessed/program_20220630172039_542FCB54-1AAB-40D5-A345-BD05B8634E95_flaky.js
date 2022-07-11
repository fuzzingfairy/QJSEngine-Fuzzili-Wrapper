function main() { 
const v0 = {};
const v1 = [v0];
v0.__proto__ = v1;
const v2 = [...v1,v0,v1,...v1];
const v3 = v0.__proto__;
const v4 = eval;
v1[v3] >>>= v3;
const v5 = "d";
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
