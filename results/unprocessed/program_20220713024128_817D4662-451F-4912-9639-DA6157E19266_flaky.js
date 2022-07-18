function main() { 
const v0 = {};
const v2 = Object();
const v3 = {"defineProperty":Object,"isExtensible":Object};
const v5 = Object();
const v8 = Object();
const v9 = new Proxy(v0,v3);
v0.__proto__ = v9;
const v10 = [v0,v0,v0,v0];
const v12 = Object();
const v13 = 1186;
for (let [v14,v15,v16] of v10) {
    const v17 = 1;
}
const v18 = Float64Array;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
