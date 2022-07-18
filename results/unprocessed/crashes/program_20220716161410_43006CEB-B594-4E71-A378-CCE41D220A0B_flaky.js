function main() { 
const v0 = {};
const v1 = [v0,v0];
const v2 = -Infinity;
v0.__proto__ = v1;
const v4 = Object;
const v5 = Object;
const v7 = Object();
const v9 = Object();
const v10 = v9 >> v0;
const v11 = String.prototype;
const v12 = Object;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
