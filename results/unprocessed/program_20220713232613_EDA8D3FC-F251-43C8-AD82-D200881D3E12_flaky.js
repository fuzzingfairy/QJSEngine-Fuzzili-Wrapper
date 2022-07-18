function main() { 
const v0 = {};
const v1 = [v0,v0,v0,v0];
v0.__proto__ = v1;
const v4 = v0["toLowerCase"](Object,Object,Object,Object,v0);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
