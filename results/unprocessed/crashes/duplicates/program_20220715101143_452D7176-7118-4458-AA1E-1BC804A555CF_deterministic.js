function main() { 
const v0 = {};
const v2 = [v0,v0,v0,v0,v0];
v0.__proto__ = v2;
const v4 = delete Object[-5.0];
const v5 = v2 >>> v4;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
