function main() { 
const v1 = [-776700.8497847233,-776700.8497847233,-776700.8497847233,-776700.8497847233];
v1.length = 0;
v1[9] = v1;
const v4 = Math.tanh(v1);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
