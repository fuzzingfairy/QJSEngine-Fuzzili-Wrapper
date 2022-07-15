function main() { 
const v0 = {};
const v2 = [v0];
const v3 = Object.setPrototypeOf(...v2,v2);
let v5 = Object();
v5 /= v2;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
