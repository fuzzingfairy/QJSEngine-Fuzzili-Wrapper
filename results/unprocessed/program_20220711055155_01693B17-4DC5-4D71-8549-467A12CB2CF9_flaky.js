function main() { 
const v2 = [3301959321,3301959321,3301959321];
const v4 = Object();
const v5 = {};
const v6 = [v5];
v5.__proto__ = v6;
const v8 = Object();
const v9 = new Object(v6,v4,Object,Object,v6);
v6.length = v5;
const v10 = [3301959321,3301959321];
const v11 = Object(..."64",...v10,...Object,v4,v5);
const v12 = v11.__proto__;
const v14 = Object();
const v15 = "-65537";
const v17 = Object(Object,Object,v6);
const v18 = -Infinity;
const v19 = Object();
const v21 = Object();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
