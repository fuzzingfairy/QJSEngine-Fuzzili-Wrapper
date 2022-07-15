function main() { 
const v2 = Object();
const v3 = [v2,1.7976931348623157e+308,v2,1.7976931348623157e+308,v2,Object,v2];
v2.__proto__ = v3;
for (const v4 of v3) {
    v2[v4] >>>= v4;
}
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
