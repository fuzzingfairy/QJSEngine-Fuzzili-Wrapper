function main() { 
const v0 = {};
const v1 = [v0];
v0.__proto__ = v1;
const v3 = [204834958,204834958,204834958,204834958];
const v5 = Object(v3);
v0[v0] = v5;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
