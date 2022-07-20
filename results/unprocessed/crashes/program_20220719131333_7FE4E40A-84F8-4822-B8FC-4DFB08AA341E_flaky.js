function main() { 
const v0 = {};
const v2 = Object();
const v3 = [v0,v0];
const v4 = v3.splice(v2,v3,v3,Object);
const v5 = v3();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
