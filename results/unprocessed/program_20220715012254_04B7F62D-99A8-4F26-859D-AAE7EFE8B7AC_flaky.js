function main() { 
const v1 = [-0.0,-0.0,-0.0];
const v2 = `
    v1[5] = v1;
`;
const v4 = eval(v2);
const v5 = [-0.0,-0.0,-0.0,-0.0];
v5.constructor |= v4;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
