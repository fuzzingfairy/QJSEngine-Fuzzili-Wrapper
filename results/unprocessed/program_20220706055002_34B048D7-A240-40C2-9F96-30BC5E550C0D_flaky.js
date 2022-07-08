function main() { 
const v0 = {};
const v1 = [v0,v0];
v0.__proto__ = v1;
const v2 = 54581;
const v4 = new Uint8Array(...v1);
const v5 = Object;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
