function main() { 
const v0 = {};
const v1 = [v0];
const v3 = `
    v0.__proto__ = v1;
`;
const v5 = eval(v3);
const v6 = [670539155,670539155];
v1[v6] **= v5;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
