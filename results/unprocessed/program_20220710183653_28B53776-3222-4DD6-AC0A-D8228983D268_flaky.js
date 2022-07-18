function main() { 
const v0 = {};
const v1 = [v0,v0];
v0.__proto__ = v1;
const v3 = Object();
const v5 = Object();
const v7 = Object();
Object[536870912] |= v1;
const v8 = Object;
const v9 = `
    const v11 = Object();
    const v13 = Object();
`;
const v15 = eval(v9);
const v17 = [1024,1024];
const v20 = Object();
const v22 = Object();
const v23 = Object(Object,v20,v3,v17);
const v25 = Object();
const v26 = Array;
const v28 = Object();
const v30 = Object();
const v31 = [1024];
const v33 = delete Object.prototype;
const v34 = Object[536870912];
const v36 = Object();
const v37 = Object();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
