function main() { 
const v0 = {};
const v1 = [v0,v0];
const v3 = Symbol.replace;
v1[v3] = v0;
const v4 = {};
const v5 = [v4,v4,v4,v4];
const v7 = [..."hasInstance",v0,...v5,...v5,v1,...v5,v1,v3,v4,...v5];
const v9 = Object();
v7[2] = v7;
const v10 = v7();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
