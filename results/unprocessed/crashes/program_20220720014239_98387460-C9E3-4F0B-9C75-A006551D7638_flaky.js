function main() { 
const v1 = [2.220446049250313e-16,2.220446049250313e-16,2.220446049250313e-16];
const v2 = Infinity;
const v3 = {};
const v4 = [v3];
const v5 = {};
const v6 = [v5,v5,v5,v5];
const v8 = [...v4,Object,2.220446049250313e-16,v6,v1,2.220446049250313e-16,v3,...v6,v4,v4];
with (v3) {
    __proto__ = v8;
    const v9 = Infinity;
}
const v10 = v4();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
