function main() { 
let v0 = undefined;
const v1 = {};
const v2 = [v1,v1,v1,v1,v1];
v1.__proto__ = v2;
const v4 = Object();
v0 <<= v1;
const v5 = {};
const v6 = Object(Object,Object,v2);
let [v7] = v2;
const v8 = Object;
const v9 = [v5,v5,v5];
const v10 = 10415;
const v12 = Uint8Array();
const v13 = 34282;
const v15 = new Int8Array();
v1.valueOf = Object;
const v16 = Object;
const v18 = Object();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
