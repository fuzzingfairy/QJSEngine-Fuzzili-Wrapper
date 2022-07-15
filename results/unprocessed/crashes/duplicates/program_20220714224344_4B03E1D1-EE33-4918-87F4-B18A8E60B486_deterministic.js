function main() { 
const v1 = [1.0];
const v2 = v1.unshift();
const v3 = v1.__proto__;
const v5 = Object();
const v6 = v3.push(v5,v5,v2,v3);
const v7 = delete v5[v3];
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
