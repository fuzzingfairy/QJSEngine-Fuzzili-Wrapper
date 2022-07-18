function main() { 
const v0 = {};
const v1 = [v0];
v0.__proto__ = v1;
const v3 = Symbol.replace;
const v4 = v1[v3];
const v5 = {};
const v6 = [v5,v5,v5,v5];
const v7 = {};
const v8 = [v7,v7,v1,v7,v7];
const v10 = [-5.0,-5.0,-5.0];
const v13 = {"set":Symbol};
const v14 = Object.defineProperty(v5,"a",v13);
const v15 = Object();
const v17 = Symbol.isConcatSpreadable;
const v19 = Object();
Object[v17] = v7;
const v20 = -271078437;
const v21 = Symbol(v8);
const v22 = (v23,v24,v25,v26,v27) => {
    const v29 = Object();
};
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
