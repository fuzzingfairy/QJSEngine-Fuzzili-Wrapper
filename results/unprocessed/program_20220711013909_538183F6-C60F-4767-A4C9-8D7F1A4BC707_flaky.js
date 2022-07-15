function main() { 
const v0 = {};
const v1 = [v0,v0,v0];
v0.__proto__ = v1;
const v2 = v1.slice(...v1,...v1,v0,...v1,v0);
const v4 = Object();
const v5 = -Infinity;
function v6(v7) {
}
let v8 = v6;
function v9(v10,v11) {
    v6 = v10;
    v8 = v11;
}
const v13 = new Promise(v9);
const v14 = [v5,v5];
const v15 = "replace";
const v17 = Object();
const v18 = this;
const v20 = Object();
const v22 = [-1024];
const v23 = [v5,v5];
const v25 = Object();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
