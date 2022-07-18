function main() { 
const v0 = {};
const v1 = [v0];
const v3 = v1.__proto__;
v0.__proto__ = v1;
v1[3] = 4.0;
const v5 = [Infinity,Infinity];
const v7 = [Infinity,Infinity,Infinity,Infinity,Infinity];
const v8 = [Infinity,Infinity,Infinity];
const v10 = Object();
const v13 = Object();
const v14 = Object();
const v16 = Object();
const v18 = [3,3,3];
const v20 = Object();
Object[v0] = ReferenceError;
const v21 = `
    const v23 = Object();
    const v25 = Object();
`;
const v27 = eval(v21);
{
    const v29 = Object();
}
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
