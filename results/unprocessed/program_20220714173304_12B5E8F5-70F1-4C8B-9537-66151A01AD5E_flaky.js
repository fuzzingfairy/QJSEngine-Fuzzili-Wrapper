function main() { 
const v1 = Object();
const v2 = {};
const v3 = [v2,v2,v2,v2];
const v4 = [v3];
v2.__proto__ = v3;
while (0 < v4) {
}
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
