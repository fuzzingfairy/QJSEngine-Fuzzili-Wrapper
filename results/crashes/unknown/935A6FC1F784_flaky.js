function main() { 
const v0 = WeakSet;
const v2 = Object();
const v4 = Object();
const v6 = {};
const v7 = [v6];
const v9 = [3935892796,3935892796,3935892796];
const v10 = {};
const v11 = [v10,v10];
const v13 = Object();
const v16 = [3935892796,3935892796,v11,v9,v7];
const v17 = v7.splice;
const v18 = Reflect.apply(v17,v9,v16);
const v19 = Object(2.0,v6,null,v9,v18);
function v21(v22,v23,v24,v25) {
    Object[v22] >>>= v9;
    return v25;
}
const v26 = v21(v11,Object,v18);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
