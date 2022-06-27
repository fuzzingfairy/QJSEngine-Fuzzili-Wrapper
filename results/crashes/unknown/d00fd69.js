function main() { 
const v1 = [3769255543,3769255543,3769255543,3769255543];
v1[8] = v1;
const v3 = v1["join"]();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
