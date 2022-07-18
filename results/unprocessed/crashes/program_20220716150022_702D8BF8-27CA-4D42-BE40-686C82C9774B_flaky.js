function main() { 
const v0 = {};
const v1 = [v0,v0,v0];
v0.__proto__ = v1;
const v4 = [-2.0];
const v6 = [6,6];
const v8 = Object();
const v9 = v0 << v1;
const v10 = Object(v6,v0,v1,isFinite);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
