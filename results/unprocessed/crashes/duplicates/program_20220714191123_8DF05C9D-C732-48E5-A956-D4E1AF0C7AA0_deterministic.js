function main() { 
const v1 = {};
const v2 = [-631827.6418985324,-631827.6418985324];
v2[8] = v2;
const v4 = [v1,-631827.6418985324,v2];
const v5 = v2.fill;
const v6 = Reflect.apply(v5,v2,v4);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
