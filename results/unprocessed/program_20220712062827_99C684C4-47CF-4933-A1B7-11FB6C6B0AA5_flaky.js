function main() { 
const v0 = {};
const v1 = [v0,v0,v0,v0];
const v3 = [4.0,4.0,4.0,4.0];
const v5 = [10];
v3[64] = v3;
const v7 = Object();
const v8 = Object(10,v7);
const v9 = [10,Object,Object,v5,v8];
const v10 = v3 & v8;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
