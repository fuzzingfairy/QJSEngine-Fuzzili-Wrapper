function main() { 
const v1 = [-9007199254740992];
const v2 = {};
const v3 = [v2,v1,v2,v2];
v1[4] = v3;
const v4 = v1.constructor;
v4[815362958] += v1;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
