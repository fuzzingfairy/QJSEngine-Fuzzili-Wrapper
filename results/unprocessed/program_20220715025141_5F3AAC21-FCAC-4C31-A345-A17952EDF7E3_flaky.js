function main() { 
const v1 = [903556.2724816678,903556.2724816678];
v1[4] = v1;
v1.__proto__ *= v1;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
