function main() { 
const v0 = {};
const v1 = [v0,v0];
const v3 = {};
const v4 = [v3,v3];
v4[1531980642] = v1;
let [v5,v6,...v7] = v4;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
