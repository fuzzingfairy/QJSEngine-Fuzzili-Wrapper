function main() { 
const v2 = Object();
const v3 = [v2,-636451.121388172,v2];
v2.__proto__ = v3;
const v4 = v3();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
