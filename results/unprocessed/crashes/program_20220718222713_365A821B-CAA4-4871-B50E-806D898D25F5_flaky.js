function main() { 
const v1 = {};
const v2 = [v1,v1,v1,v1];
const v3 = [-152791.29072212556,v2,-152791.29072212556];
v1.__proto__ = v3;
const v4 = delete v1[v2];
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
