function main() { 
const v1 = [-9007199254740992];
const v2 = `
    v1[3] = v1;
`;
const v4 = eval(v2);
const v5 = {};
const v6 = [v5,v5,v5,v5];
const v7 = v6.join(v4);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
