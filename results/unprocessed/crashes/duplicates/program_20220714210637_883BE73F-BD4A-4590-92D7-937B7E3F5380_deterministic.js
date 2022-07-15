function main() { 
const v0 = {};
const v1 = [v0,v0,v0];
let v2 = 965763.8390614938;
const v3 = {"call":v2,"construct":v2,"setPrototypeOf":v0};
const v5 = new Proxy(v0,v3);
v0.__proto__ = v5;
v2 <<= v1;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
