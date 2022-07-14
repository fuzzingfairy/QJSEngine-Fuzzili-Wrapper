function main() { 
const v1 = [-4294967297];
const v2 = v1.splice(-4294967297,-4294967297,v1);
const v4 = Math.log10(v1);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
