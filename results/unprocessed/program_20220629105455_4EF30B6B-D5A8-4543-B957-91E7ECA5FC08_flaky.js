function main() { 
const v0 = {};
const v1 = [v0,v0];
v0.__proto__ = v1;
const v2 = `0kThVBfz7s${v1}symbol${v0}5LXbR9uUru`;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
