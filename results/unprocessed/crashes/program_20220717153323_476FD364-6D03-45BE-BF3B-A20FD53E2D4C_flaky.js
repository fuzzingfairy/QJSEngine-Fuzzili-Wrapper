function main() { 
const v1 = {};
const v2 = [v1,v1,v1];
with (v1) {
    __proto__ = v2;
    const v3 = v1 !== v1;
    const v4 = v3 ? v1 : v1;
}
v1[1.0] += v2;
const v9 = new Int16Array(23042);
const v10 = [1000000000.0,1000000000.0];
const v13 = {"b":v1,"c":-4272346363,"length":-4272346363};
const v14 = Object();
const v15 = Object();
const v16 = [v2,Int16Array,23042,v9,v1];
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
