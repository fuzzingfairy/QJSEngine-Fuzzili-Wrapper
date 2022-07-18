function main() { 
const v0 = {};
const v1 = [v0,v0,v0,v0,v0];
v0.__proto__ = v1;
const v3 = Math.sin(v0);
const v4 = {};
const v5 = [v4,v4];
const v6 = 1;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
