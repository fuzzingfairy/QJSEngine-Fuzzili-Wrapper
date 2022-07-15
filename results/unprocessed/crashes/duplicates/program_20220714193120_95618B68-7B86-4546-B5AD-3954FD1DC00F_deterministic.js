function main() { 
const v0 = {};
const v1 = [v0];
v1[193264124] = v1;
let [,v2,v3,...v4] = v1;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
