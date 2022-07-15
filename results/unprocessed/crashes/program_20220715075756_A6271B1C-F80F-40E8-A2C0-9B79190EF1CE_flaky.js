function main() { 
const v1 = {};
const v3 = [9007199254740992,9007199254740992,9007199254740992,9007199254740992,9007199254740992];
const v5 = Object();
const v6 = [v5,Object,...v3,v3,v1];
const v7 = {"d":v3};
const v9 = v7.__proto__;
const v10 = {"apply":Object,"construct":Object,"deleteProperty":Object,"has":v6,"set":Object};
const v12 = new Proxy(v7,v10);
v9.__proto__ = v12;
for (const v13 in v3) {
}
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
