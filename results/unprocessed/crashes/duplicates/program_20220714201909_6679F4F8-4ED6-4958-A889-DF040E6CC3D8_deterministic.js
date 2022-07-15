function main() { 
const v0 = /lCD.*/y;
const v2 = {"construct":9007199254740991,"isExtensible":v0,"setPrototypeOf":v0};
const v4 = new Proxy(v0,v2);
v0.__proto__ = v4;
let v6 = [-1000000000000.0,v0,9007199254740991];
const v7 = ++v6;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
