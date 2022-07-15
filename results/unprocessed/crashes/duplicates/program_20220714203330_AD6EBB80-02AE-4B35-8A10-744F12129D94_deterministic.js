function main() { 
const v1 = {};
const v2 = [v1];
const v3 = {"getOwnPropertyDescriptor":eval,"ownKeys":eval};
const v5 = new Proxy(v2,v3);
v5.__proto__ = v5;
const v6 = v2.constructor;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
