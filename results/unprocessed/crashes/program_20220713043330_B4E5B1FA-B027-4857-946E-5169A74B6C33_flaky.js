function main() { 
const v0 = 5.0;
let v1 = {};
const v2 = [v1,v1,v1,v1];
const v3 = `
    const v4 = v2.__proto__;
    v4[9] = v4;
`;
const v6 = eval(v3);
v1 &= v6;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
