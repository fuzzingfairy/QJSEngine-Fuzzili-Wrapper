function main() { 
const v0 = {};
const v1 = [v0,v0];
with (v0) {
    __proto__ = v1;
    const v3 = Object();
}
const v6 = new Int32Array();
const v8 = Object();
v0[v0] = v1;
Object[1] = 1000000000000.0;
const v9 = [v1,v0];
const v10 = "1";
function v11(v12) {
}
let v13 = v11;
function v14(v15,v16) {
    v11 = v15;
    v13 = v16;
}
const v18 = new Promise();
const v20 = Object();
const v21 = v14(Object,v14);
const v22 = {"apply":Object,"call":v14,"defineProperty":Object,"get":v21,"ownKeys":Object,"preventExtensions":v21};
const v23 = Proxy;
const v24 = Object;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
