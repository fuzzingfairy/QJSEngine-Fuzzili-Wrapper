function main() { 
const v0 = {};
const v1 = [v0];
const v2 = v1.splice(...v1,v0,v1);
const v3 = v1 in v0;
const v7 = `
    const v8 = [v0,-2561666716n,Object,..."IRLor4m47V",..."IRLor4m47V",v3];
`;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
