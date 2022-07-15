function main() { 
const v2 = Object();
const v3 = {};
const v4 = [v3,v3,v3];
const v5 = Object in v3;
v3.__proto__ = v4;
const v6 = this;
let v7 = 0;
do {
    const v10 = Object();
    const v11 = v7++;
} while (v7 < 4);
const v13 = Object();
const v14 = "number";
let [v15,,,v16] = v4;
const v18 = Object();
const v20 = Object();
const v22 = 64 && v20;
const v23 = [-150712.3346708899,v20,v3,v22,...v4];
const v25 = Object();
v3[-150712.3346708899] |= v23;
const v26 = [64,64,64];
const v29 = Object();
const v30 = Object <= Object;
const v31 = Object();
v26[v22] >>>= Object;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
