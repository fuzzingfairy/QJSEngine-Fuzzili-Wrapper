function main() { 
const v0 = {};
const v1 = [v0,v0,v0,v0];
const v3 = v1.splice(-4294967296,-4294967296,v1);
const v4 = v1.toLocaleString();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
