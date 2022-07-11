function main() { 
const v0 = {};
const v1 = [v0,v0,v0,v0];
const v3 = delete v0[5];
v0.__proto__ = v1;
const v4 = delete v1[v1];
const v6 = Object();
const v7 = [1994651417,1994651417,1994651417,1994651417];
const v8 = `
    const v9 = (v10,v11,v12,v13) => {
        const v15 = Object();
        return v9;
    };
`;
const v17 = eval();
const v18 = {};
const v20 = Object();
const v21 = true;
const v23 = Object();
const v24 = null;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
