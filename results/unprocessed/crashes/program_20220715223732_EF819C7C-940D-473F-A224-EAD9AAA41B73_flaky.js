function main() { 
const v1 = {};
const v2 = [v1];
v1.__proto__ = v2;
const v3 = typeof -3176871222;
let v5 = Object();
const v7 = v3 === "symbol";
const v9 = [Object,..."symbol",-3176871222,...v2,...v2,v2,Object,v7,...v2];
v5 -= v9;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
