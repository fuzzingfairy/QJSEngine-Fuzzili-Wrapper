function main() { 
const v0 = {};
const v1 = [v0];
v0.__proto__ = v1;
const v2 = delete v1[-4294967297];
const v4 = {};
const v5 = v1 <= v4;
const v6 = [v4,v4,v4,v4];
const v7 = {};
const v9 = Object();
const v10 = Object(v7,...v6,v5,v7);
const v11 = Object();
const v13 = Object();
const v14 = [v7];
const v15 = Object(...v14,v2,...v6,v5);
const v17 = v1["toString"]();
const v18 = 646383183;
const v19 = delete "boolean".constructor;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
