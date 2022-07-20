function main() { 
const v0 = {};
const v1 = [v0,v0,v0,v0,v0];
v0.__proto__ = v1;
const v3 = [75244.92396400892,75244.92396400892,75244.92396400892,75244.92396400892,v1];
throw v3;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
