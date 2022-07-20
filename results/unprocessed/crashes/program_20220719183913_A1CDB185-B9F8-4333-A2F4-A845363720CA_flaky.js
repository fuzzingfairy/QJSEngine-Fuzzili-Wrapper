function main() { 
const v1 = [62524,62524,62524];
const v3 = {"get":Object};
v1[0] = v1;
const v4 = Object(v1);
const v5 = delete v3[v4];
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
