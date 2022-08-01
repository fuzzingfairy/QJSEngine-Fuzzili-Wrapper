function main() { 
const v1 = [1.7976931348623157e+308];
const v2 = {};
const v3 = [v2,v2,v2,v2,v2];
v2.__proto__ = v3;
const v5 = {};
const v6 = [v5,v5,v5];
const v7 = `f6yHGpTgw6${v3}rTae0DpQvh${v1}split${Object}sRAvu2Yfnv${v6}2PRsjFIEVx`;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
