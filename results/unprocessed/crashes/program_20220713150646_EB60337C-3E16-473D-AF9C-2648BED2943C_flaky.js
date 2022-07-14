function main() { 
const v1 = [534610.7740595269,534610.7740595269,534610.7740595269,534610.7740595269];
const v3 = Object();
v1[3] = v1;
const v4 = v1 in v3;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
