function main() { 
const v1 = {};
const v2 = [v1,v1,v1,v1];
v1.__proto__ = v2;
const v4 = v1.toPrimitive;
const v5 = "undefined"[v4];
const v8 = v2();
const v9 = {"__proto__":v1,"b":-13830.117003577529,"d":Symbol,"length":Object,"toPrimitive":"undefined"};
const v10 = Set;
const v11 = Object;
const v13 = Object();
const v14 = Object;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
