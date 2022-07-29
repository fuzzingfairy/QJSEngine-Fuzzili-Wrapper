function main() { 
const v0 = {};
const v1 = [v0,v0,v0,v0,v0];
v0.__proto__ = v1;
const v3 = [..."object",v0,v1,v0,v0,v0,..."object",..."object"];
v0[-2128800925] %= v3;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
