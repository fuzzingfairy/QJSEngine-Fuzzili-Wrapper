function main() { 
const v1 = [969728.9978661984];
const v2 = {};
let v3 = [v2,v2,v2,v2];
const v5 = [v3];
const v6 = {};
const v7 = [v2,v6,v6,v6];
const v9 = Object();
v2.__proto__ = v7;
const v10 = `
    const v11 = v5.filter(Object);
    v3 <<= v11;
`;
const v13 = eval(v10);
const v14 = eval(v10);
const v16 = (3848932813)();
const v17 = Object(v9,eval,v5,v1);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
