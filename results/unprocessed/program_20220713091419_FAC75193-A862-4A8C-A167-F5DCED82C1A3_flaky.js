function main() { 
const v1 = {};
const v2 = [v1,v1,v1,v1];
v1.__proto__ = v2;
const v3 = -204689.62009034806;
const v4 = `
    v2.d = v2;
`;
const v6 = eval(v4);
const v8 = [v6,v6];
const v9 = v2.slice;
const v10 = Reflect.apply(v9,v2,v8);
const v11 = `
    const v12 = [v4,4294967297n,v1,eval,v4,v6,eval];
`;
const v13 = Object;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
