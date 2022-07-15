function main() { 
const v1 = [3];
v1[8] = v1;
const v3 = [-740839.7884823594,3,v1,-740839.7884823594,3,3,3,...v1];
const v4 = [v1,v1,-740839.7884823594,v1];
const v5 = v4.copyWithin(-740839.7884823594,...v1,...v3);
throw v5;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
