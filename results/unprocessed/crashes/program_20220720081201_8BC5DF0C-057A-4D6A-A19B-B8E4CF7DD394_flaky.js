function main() { 
const v0 = {};
const v1 = [v0,v0,v0,v0];
v0.__proto__ = v1;
const v3 = v0[23876];
const v4 = `268435456${v3}VdNc0H2cRC${23876}MAX_SAFE_INTEGER${v1}FbULgMSV7L${23876}E2atP79KYm`;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
