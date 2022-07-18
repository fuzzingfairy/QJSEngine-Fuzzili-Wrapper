function main() { 
const v0 = {};
const v1 = [v0];
v0.__proto__ = v1;
const v2 = Object;
const v3 = v0();
const v4 = typeof v0;
const v6 = v4 === "symbol";
const v7 = Object;
with (v3) {
    a = v6;
}
const v8 = eval;
const v9 = 2.0;
const v11 = [1073741824,1073741824,1073741824,1073741824];
const v12 = Object;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
