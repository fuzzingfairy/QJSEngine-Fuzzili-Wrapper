function main() { 
const v1 = [-1.0,-1.0,-1.0];
v1[2] = v1;
const v3 = [-1.0,v1,...v1,...v1,3769255543,...v1];
const v5 = /\S3/i;
const v6 = v5[v3];
const v8 = BigInt["asUintN"]();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
