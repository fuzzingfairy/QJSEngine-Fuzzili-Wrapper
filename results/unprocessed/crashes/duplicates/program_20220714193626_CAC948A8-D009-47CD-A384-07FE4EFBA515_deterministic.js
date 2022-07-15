function main() { 
const v1 = [3.0];
v1[3.0] = v1;
let [,v2,v3,v4] = v1;
const v5 = v2 === 3.0;
const v6 = v5 - v4;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
