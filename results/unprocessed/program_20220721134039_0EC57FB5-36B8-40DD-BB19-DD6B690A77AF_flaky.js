function main() { 
const v2 = {};
const v3 = [v2,v2,v2,v2,v2];
const v5 = [-155003987,v3,-155003987,-155003987];
v2.__proto__ = v5;
const v7 = "2"["concat"](v2,5);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
