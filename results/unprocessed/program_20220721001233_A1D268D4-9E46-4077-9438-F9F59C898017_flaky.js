function main() { 
const v1 = {};
const v2 = [v1,v1,v1,v1];
for (const v3 of v2) {
    v3.__proto__ = v2;
}
const v5 = v1(v1,v1,1.0,v1);
const v7 = 100 >>> Object;
const v9 = Object();
const v11 = Object();
const v12 = {};
const v14 = typeof 1.0;
const v16 = v14 === "symbol";
const v17 = Object();
const v18 = Object;
const v20 = Object();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
