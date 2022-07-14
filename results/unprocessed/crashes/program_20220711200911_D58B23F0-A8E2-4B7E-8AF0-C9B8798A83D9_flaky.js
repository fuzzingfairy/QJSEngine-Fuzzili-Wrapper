function main() { 
const v1 = {};
const v2 = [v1,v1,v1,v1,v1];
const v4 = Object();
v2[6] = v2;
const v5 = new Uint16Array(v2);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
