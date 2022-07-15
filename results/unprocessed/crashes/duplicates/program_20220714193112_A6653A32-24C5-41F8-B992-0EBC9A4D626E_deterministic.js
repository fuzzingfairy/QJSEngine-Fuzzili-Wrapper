function main() { 
const v2 = new Int8Array(60048);
const v3 = {};
const v4 = [v3,v3,60048,v3];
v4[256] = v4;
v2[30325] = v4;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
