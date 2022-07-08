function main() { 
const v0 = /aWH/m;
const v2 = {"call":v0,"getPrototypeOf":Int8Array,"setPrototypeOf":v0};
const v4 = new Proxy(v0,v2);
v2.__proto__ = v4;
v4.__proto__ = v2;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
