function main() { 
const v0 = {};
const v1 = [v0,v0,v0];
const v2 = `
    v1[6] = v1;
`;
const v4 = eval(v2);
const v8 = [v4,0];
const v9 = v1.splice;
const v10 = Reflect.apply(v9,Object,v8);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
