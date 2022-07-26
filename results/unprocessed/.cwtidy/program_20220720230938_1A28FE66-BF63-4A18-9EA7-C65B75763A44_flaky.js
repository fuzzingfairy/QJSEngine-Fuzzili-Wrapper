function main() { 
const v0 = {};
const v1 = [v0];
let v2 = -4294967295;
v0.__proto__ = v1;
v2 >>>= v1;
const v3 = /(\SG\S)/;
let [] = v1;
const v4 = [v3,...v1,v0];
const v5 = [v2,v2];
const v6 = {};
const v7 = [v6];
const v8 = -3.0;
const v9 = /\D/;
const v11 = Object();
v4[v9] >>>= v6;
const v13 = Object();
const v15 = Object();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
