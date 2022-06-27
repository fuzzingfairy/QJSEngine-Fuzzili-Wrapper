function main() { 
const v1 = [2.2250738585072014e-308,2.2250738585072014e-308,2.2250738585072014e-308,2.2250738585072014e-308,2.2250738585072014e-308];
const v3 = v1.push(v1);
const v4 = v3 == v1;
const v6 = `
    const v7 = Int8Array(2.2250738585072014e-308,-2785212497n);
`;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
