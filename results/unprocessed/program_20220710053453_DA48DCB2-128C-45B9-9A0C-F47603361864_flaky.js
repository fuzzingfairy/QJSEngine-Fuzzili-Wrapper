function main() { 
const v0 = {};
const v1 = [v0,v0];
const v3 = {};
const v4 = [v3,v3];
const v5 = Object;
v3.__proto__ = v4;
const v6 = v3.imul();
const v7 = 100;
const v8 = Object;
const v9 = null;
const v10 = -5.0;
const v11 = 0;
const v12 = [-65535];
const v13 = eval;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
