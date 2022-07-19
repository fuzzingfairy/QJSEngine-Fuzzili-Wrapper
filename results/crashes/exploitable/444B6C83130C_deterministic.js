function main() { 
const v1 = [-2591450565,-2591450565,-2591450565];
const v2 = v1.__proto__;
v2[5] = v2;
const v3 = v2();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
