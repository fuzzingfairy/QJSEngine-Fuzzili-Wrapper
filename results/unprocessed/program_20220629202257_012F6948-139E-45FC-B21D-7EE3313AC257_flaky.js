function main() { 
const v0 = {};
const v1 = [v0,v0,v0,v0];
v0.__proto__ = v1;
const v2 = [...v1,v0,...v1];
let v3 = [v1,v0,v0,v0,v2,v2];
function v4(v5,v6) {
}
const v7 = v3--;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
