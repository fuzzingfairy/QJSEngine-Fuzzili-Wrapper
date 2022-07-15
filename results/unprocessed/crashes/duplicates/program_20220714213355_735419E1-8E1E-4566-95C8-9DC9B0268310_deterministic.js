function main() { 
let v1 = [916992070,916992070,916992070,916992070,916992070];
v1[5] = v1;
const v3 = Object();
v1 *= v3;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
