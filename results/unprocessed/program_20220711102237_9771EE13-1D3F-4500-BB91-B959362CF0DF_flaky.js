function main() { 
const v0 = {};
const v1 = [v0,v0,v0];
v0.__proto__ = v1;
const v3 = Object();
const v4 = 42944;
const v7 = Object();
const v8 = new Float32Array(v0);
const v12 = "toString"();
const v13 = [-381911.25141258666,-381911.25141258666,-381911.25141258666];
const v14 = Object;
const v15 = v13();
"toString".length = 0;
const v18 = Object();
const v19 = [-381911.25141258666,v18];
const v21 = `
    const v22 = Object;
    const v23 = v19();
`;
const v25 = eval(Object);
const v26 = Object();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
