function main() { 
const v0 = {};
const v1 = [v0,v0,v0];
const v3 = 1292 in v1;
const v4 = v3 in v1;
const v5 = v4;
v1[9] = v1;
const v7 = Object();
const v9 = (1292).__proto__;
const v10 = v5 ** 1292;
const v11 = v10 == Int8Array;
const v12 = Object;
const v13 = undefined;
const v14 = v1();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
