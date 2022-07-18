function main() { 
const v0 = "source";
const v2 = [129];
const v3 = [129,129,129,129,129];
const v4 = {};
const v5 = [v4,v4,v4,v4,v4];
v4.__proto__ = v5;
const v6 = class V6 {
    constructor(v8,v9) {
        const v11 = Object();
        const v12 = delete v9[v11];
    }
    ownKeys(v14) {
        const v16 = Object();
    }
};
const v17 = -Infinity;
const v18 = Object;
const v19 = v4();
const v21 = Object();
const v22 = Object;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
