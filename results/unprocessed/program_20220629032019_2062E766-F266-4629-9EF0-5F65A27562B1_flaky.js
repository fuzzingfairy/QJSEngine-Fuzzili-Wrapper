function main() { 
const v1 = [860255307,860255307,860255307];
v1[4] = v1;
const v2 = [v1];
const v3 = v2();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
