function main() { 
const v1 = Object();
function* v2(v3,v4,v5) {
}
const v6 = {};
const v7 = [v6,v6,v6];
v6.__proto__ = v7;
Object[v7] %= v2;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
