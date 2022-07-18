function main() { 
const v1 = {};
const v2 = [v1,v1,v1];
v1.__proto__ = v2;
const v3 = delete "symbol"[v1];
const v4 = /\S\d\S.+/iu;
const v5 = 5;
const v7 = Object();
const v9 = [-3.0,-3.0,-3.0,-3.0];
const v11 = Object();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
