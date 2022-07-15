function main() { 
const v1 = [536870912];
const v3 = `
    const v4 = [536870912,1.0,536870912,1.0,v3,1.0,536870912,v1,v1,536870912];
    v4[7] = v4;
`;
const v6 = eval(v3);
const v7 = v6[v6];
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
