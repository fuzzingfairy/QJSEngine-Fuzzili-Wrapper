function main() { 
const v1 = {};
const v2 = [v1,v1,v1];
const v4 = [60343,60343];
v1.__proto__ = v2;
"wp1xEPPPco"[v2] >>>= v4;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
