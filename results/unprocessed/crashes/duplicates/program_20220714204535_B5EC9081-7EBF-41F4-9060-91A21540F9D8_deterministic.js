function main() { 
const v0 = {};
const v1 = [v0,v0,v0,v0,v0];
v1[7] = v1;
const v2 = `size${v1}hasInstance${v1}symbol`;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
