function main() { 
const v2 = new Int32Array(32273);
const v4 = [3769255543,3769255543,3769255543,3769255543];
v4[7] = v4;
v2[3] = v4;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
