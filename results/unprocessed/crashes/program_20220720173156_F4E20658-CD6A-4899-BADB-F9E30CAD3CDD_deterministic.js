function main() { 
const v1 = {};
const v2 = [v1,v1,v1,v1,v1];
const v4 = [-2147483647,-2147483647,v2];
const v5 = v2.splice;
const v6 = Reflect.apply(v5,v2,v4);
const v7 = delete v1[v2];
const v9 = Object();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
