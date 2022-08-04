function main() { 
const v1 = [{},{},{}];
v1[1] = v1;
const v4 = v1.toLocaleString();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
