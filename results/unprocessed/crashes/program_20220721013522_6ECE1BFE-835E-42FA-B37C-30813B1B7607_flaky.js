function main() { 
const v1 = Object();
const v2 = Object;
const v3 = {};
const v5 = Object();
const v6 = [v3,v3,v3];
const v7 = Object;
const v8 = {};
const v9 = "9asQlfc8HZ";
const v11 = Object();
v11.valueOf = Object;
const v13 = Object();
v3.__proto__ = v6;
const v16 = Object();
const v18 = v3["trunc"]();
const v19 = Object();
const v20 = {};
const v21 = [v20,v20,v20,v20,v20];
const v22 = Object;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
