function main() { 
const v1 = [NaN,NaN];
const v2 = {};
with (v1) {
    d = NaN;
    v1[2] = v1;
}
const v3 = [v2,v1,v2,v2];
const v4 = 1.0;
const v6 = v1();
const v8 = [109215878];
const v10 = {"call":Object,"construct":Object,"deleteProperty":Object,"get":v1,"isExtensible":Object,"ownKeys":Object,"preventExtensions":Object,"set":Object,"setPrototypeOf":Object};
const v12 = Proxy(Object);
const v13 = v6();
const v14 = 2.2250738585072014e-308;
const v15 = Object;
const v16 = v8();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
