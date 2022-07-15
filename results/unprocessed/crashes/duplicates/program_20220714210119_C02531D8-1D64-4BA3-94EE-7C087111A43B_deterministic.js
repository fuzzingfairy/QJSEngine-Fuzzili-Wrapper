function main() { 
const v1 = [-2775314386,-2775314386,-2775314386];
const v3 = {};
const v4 = [v3,v3,ReferenceError,v1];
v1[8] = v1;
const v5 = v4();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
