function main() { 
const v1 = Object();
const v3 = [1.0];
const v4 = {};
const v5 = [v4,v4,v4];
v4.__proto__ = v5;
const v7 = Object();
const v8 = Object;
const v10 = Object();
const v11 = v5 | v3;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
