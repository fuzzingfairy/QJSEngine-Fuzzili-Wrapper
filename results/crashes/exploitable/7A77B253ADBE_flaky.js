function main() { 
const v1 = [2.2250738585072014e-308,2.2250738585072014e-308,2.2250738585072014e-308,2.2250738585072014e-308];
v1[v1] = v1;
const v2 = v1;
v2[3] = v1;
const v3 = 2469738963;
const v4 = delete v1[v1];
const v6 = Object();
const v9 = Object();
const v10 = "unscopable";
const v12 = Object();
const v15 = Object();
v2.__proto__ = "NEGATIVE_INFINITY";
const v16 = new Uint8Array(v4,v6,Uint8Array,..."NEGATIVE_INFINITY",v9,v15);
const v18 = Object();
const v19 = Object.prototype;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
