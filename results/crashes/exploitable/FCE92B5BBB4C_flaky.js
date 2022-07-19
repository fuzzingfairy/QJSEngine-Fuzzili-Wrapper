function main() { 
const v0 = {};
const v1 = [v0];
v1[2] = v1;
v1[v1] >>= v0;
const v2 = {"call":v1,"construct":v1,"defineProperty":v1,"deleteProperty":v1,"getOwnPropertyDescriptor":v0,"isExtensible":v0,"preventExtensions":v0,"set":v0};
const v3 = {};
const v4 = [v3,v3,v3,v3];
const v5 = Object;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
