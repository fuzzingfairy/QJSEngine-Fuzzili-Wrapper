function main() { 
const v0 = {};
const v1 = [v0];
v0.__proto__ = v1;
const v3 = v0();
const v5 = Object();
const v6 = {};
const v7 = [v6,Object];
const v10 = {"constructor":v1,"e":v6,"length":Object};
const v11 = Object();
const v12 = Object;
Object[-4294967296] = v1;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
