function main() { 
const v1 = {};
const v2 = [v1,v1,v1];
const v3 = {};
const v4 = v2.length;
const v6 = [v1,9007199254740992];
const v7 = [v1,v3,v3];
const v8 = {};
const v9 = [9007199254740992,v6,v3,ReferenceError,v6,v1,v6,v1,v4,v2];
const v10 = {};
const v11 = [v10,v10,v3,v10,v10];
v3.__proto__ = v7;
const v13 = Object();
const v14 = Object;
const v15 = v9();
const v16 = ReferenceError();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
