function main() { 
const v1 = String && String;
const v2 = [v1];
v1.__proto__ = v2;
const v4 = Object();
v4[String] /= v4;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
