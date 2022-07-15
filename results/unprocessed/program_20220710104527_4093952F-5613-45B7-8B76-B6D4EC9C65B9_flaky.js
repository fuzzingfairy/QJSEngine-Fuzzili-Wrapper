function main() { 
const v0 = {};
const v1 = [v0,v0,v0,v0];
const v2 = NaN;
{
    v0.__proto__ = v1;
}
const v3 = {};
const v5 = v1();
const v7 = Object();
const v8 = [v3,v3,v3,v3];
const v10 = [-5.0,-5.0,-5.0,-5.0];
const v12 = Object[1024];
const v13 = Object();
const v14 = Map;
const v15 = Object;
const v16 = v10();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
