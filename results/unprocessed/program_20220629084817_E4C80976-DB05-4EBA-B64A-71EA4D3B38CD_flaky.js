function main() { 
const v1 = {"ownKeys":Object};
const v3 = new Proxy(Object,v1);
v3.__proto__ = v3;
const v5 = Object;
const v6 = NaN in v3;
const v7 = Object;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
