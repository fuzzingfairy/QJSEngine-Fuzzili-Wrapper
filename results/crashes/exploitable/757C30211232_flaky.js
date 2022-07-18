function main() { 
const v1 = {};
const v2 = [v1,v1,v1];
const v3 = Uint8Array;
const v4 = Object;
const v6 = v2["pop"]();
const v7 = {};
const v9 = new Proxy(v2,v7);
v1.__proto__ = v9;
const v10 = parseFloat(v6);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
