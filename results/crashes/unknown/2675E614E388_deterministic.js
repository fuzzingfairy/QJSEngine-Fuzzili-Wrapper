function main() { 
let v0 = /\S/i;
v0 = Object;
const v2 = {};
const v4 = new Proxy(v0,v2);
Object.__proto__ = v4;
const v7 = [-2.2250738585072014e-308,-2.2250738585072014e-308,-2.2250738585072014e-308,-2.2250738585072014e-308,-2.2250738585072014e-308];
Object[256] = v2;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
