function main() { 
const v0 = {};
const v1 = [v0,v0];
v0.__proto__ = v1;
const v3 = Math.sign(v1);
const v5 = Object();
const v6 = {};
const v7 = [v6,v6,v6,v6];
const v9 = -5.0;
const v10 = [ReferenceError];
const v11 = {};
const v12 = [v11,v10,v11,v11];
const v14 = v7;
const v15 = Object();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
