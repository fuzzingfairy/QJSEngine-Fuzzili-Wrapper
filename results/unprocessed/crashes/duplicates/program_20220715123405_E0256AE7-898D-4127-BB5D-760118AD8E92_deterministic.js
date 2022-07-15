function main() { 
let v0 = 422751.5014179896;
const v1 = [v0,v0,v0,v0];
v1[0] = v1;
let v2 = `
    [v2,v0,v2] = v1;
`;
const v4 = eval(v2);
const v5 = v4 in v4;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
