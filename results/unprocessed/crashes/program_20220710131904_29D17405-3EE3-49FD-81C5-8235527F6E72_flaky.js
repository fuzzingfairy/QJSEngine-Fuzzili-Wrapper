function main() { 
const v0 = {};
const v1 = [v0,v0,v0,v0];
v0.__proto__ = v1;
const v2 = Object;
const v3 = v0();
const v5 = [v1,-1024,-1024];
const v6 = parseFloat;
const v7 = "MIN_SAFE_INTEGER";
const v8 = undefined;
const v10 = Object();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
