function main() { 
let v1 = ['AAAAA','AAAAA','AAAAA'];
v1[1] = v1;
let v3 = ['BBBBB', 'BBBBB', 'BBBBB'];
const v2 = v1 + v3;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
