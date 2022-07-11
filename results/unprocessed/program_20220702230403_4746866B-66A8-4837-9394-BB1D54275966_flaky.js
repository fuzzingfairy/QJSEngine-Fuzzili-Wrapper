function main() { 
const v0 = 2.220446049250313e-16;
const v2 = 1073741824;
const v5 = Object;
const v6 = Object();
const v9 = {"apply":Object,"construct":Object,"defineProperty":Object,"deleteProperty":Object,"get":Object,"getPrototypeOf":Object,"has":Object,"isExtensible":Object,"preventExtensions":Object,"setPrototypeOf":Object};
const v11 = new Proxy(Promise,v9);
const v12 = Promise[-1229596687];
const v13 = Object;
const v14 = Object[2412905455];
let v15 = 0;
do {
    Promise.__proto__ = v11;
    const v17 = v15++;
} while (v15 < 8);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
