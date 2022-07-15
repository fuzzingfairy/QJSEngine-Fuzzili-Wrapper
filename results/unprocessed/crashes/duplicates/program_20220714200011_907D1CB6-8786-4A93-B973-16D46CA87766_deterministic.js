function main() { 
const v1 = {};
const v2 = [v1,v1,v1,v1];
v1.__proto__ = v2;
const v3 = `255${v1}sTqztxBmAi${v1}e${-2790349307}4294967295${v1}2147483649`;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
