function main() { 
const v0 = {};
const v1 = [v0,v0,v0,v0,v0];
const v2 = v1;
v0.__proto__ = v1;
const v3 = /Bv/g;
const v5 = Object();
const v7 = [2.2250738585072014e-308,2.2250738585072014e-308];
const v9 = [-384424.47199281096,-384424.47199281096,-384424.47199281096,-384424.47199281096];
const v10 = Int16Array;
function v11(v12,v13,v14,v15) {
    with (v7) {
        valueOf = v14;
        const v16 = typeof v15;
        const v18 = v16 === "function";
        const v19 = v13.test(...v12,..."function",v18,v12,v3);
        const v21 = Object();
        const v23 = Object();
        v23.length = 2;
    }
    return v12;
}
for (const v25 of v2) {
    const v27 = v25["delete"](v1);
}
const v28 = delete v1[1000];
let v29 = 0;
do {
    const v32 = Object();
    const v33 = null;
    const v35 = Object();
    const v37 = Object();
    const v38 = v29++;
} while (v29 < 10);
function v39(v40,v41,v42) {
    const v43 = {"apply":v39,"call":v11,"construct":v39,"defineProperty":v11,"deleteProperty":v39,"get":v39,"getPrototypeOf":v39,"has":v11,"isExtensible":v39,"ownKeys":v11,"preventExtensions":v39,"set":v39,"setPrototypeOf":v39};
    const v45 = new Proxy(v40,v43);
    const v46 = {"apply":v11,"construct":v11,"defineProperty":v39,"get":v39,"getOwnPropertyDescriptor":v11,"has":v39,"isExtensible":v11,"ownKeys":v39,"preventExtensions":v39,"set":v39};
    const v47 = new Proxy(v41,v46);
    const v50 = Object();
    const v52 = Object();
    const v53 = {"__proto__":Proxy,"c":v39,"constructor":Object,"length":v2,"toString":v42,"valueOf":v41};
    const v55 = Object();
    const v56 = Object();
    const v58 = Object();
    const v60 = Object();
}
for (const v61 of v7) {
    const v63 = Object();
    const v65 = Object();
    const v67 = Object();
    const v69 = Object();
}
for (let v73 = 0; v73 < 20; v73++) {
    const v74 = {"b":2.2250738585072014e-308,"o":v11,"p":v39};
    const v75 = v39(v9,v74,0);
}
const v77 = Object();
const v78 = v39(v9,v7,1);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
