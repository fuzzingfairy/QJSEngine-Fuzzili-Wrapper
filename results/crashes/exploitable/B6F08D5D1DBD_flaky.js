function main() { 
const v1 = [1.0,1.0,1.0];
const v2 = {};
const v4 = new Proxy(v1,v2);
v4.__proto__ = v4;
const v6 = Object();
const v9 = Object();
const v10 = 1024;
const v12 = Object();
const v14 = Object();
const v15 = Object;
const v16 = 6;
const v17 = 1024;
const v18 = parseInt();
const v20 = Math.expm1(v4);
const v22 = Object();
v1.length = 1;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
