function main() { 
const v1 = [-1218919384];
const v2 = {};
const v3 = [v2,v2,v2,v2];
const v4 = `
    v2.__proto__ = v3;
`;
const v6 = eval(v4);
const v7 = /\wa\wk.\d/mi;
const v8 = -4294967295;
const v9 = -4294967295;
const v11 = Object();
v7[3] = v6;
const v12 = v6.race(v11,v6,v6,v2);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
