function main() { 
const v1 = [3769255543,3769255543,3769255543,3769255543];
const v2 = v1.__proto__;
v2[3] = v2;
const v4 = [-1000.0,-1000.0];
v4[-668465477] *= v2;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
