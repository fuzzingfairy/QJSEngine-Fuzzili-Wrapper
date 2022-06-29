function main() { 
const v1 = {};
const v2 = [v1,v1,v1,v1,v1];
v2[6] = v2;
const v3 = v2 <= "object";
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
