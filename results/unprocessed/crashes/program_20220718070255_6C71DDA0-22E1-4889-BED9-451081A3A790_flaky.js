function main() { 
const v0 = {};
const v1 = [v0,v0];
const v3 = [891260.06266628,891260.06266628,891260.06266628];
v0.__proto__ = v1;
const v5 = v0["tanh"](v0,891260.06266628,v3);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
