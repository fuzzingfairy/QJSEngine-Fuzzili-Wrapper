function main() { 
const v1 = {};
const v2 = [v1,v1];
const v3 = /.\w/um;
const v4 = v2.splice("valueOf",v2,v2,v3);
const v5 = v2 < v3;
const v6 = typeof v4;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
