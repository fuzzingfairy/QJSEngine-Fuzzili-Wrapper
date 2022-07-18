function main() { 
const v0 = {};
const v1 = [v0,v0];
const v2 = -5.0;
v1[3] = v1;
const v4 = v1();
const v5 = v1.__proto__;
const v6 = "-65536";
const v7 = Object;
const v8 = Object != Object;
const v9 = v8 ? v4 : Object;
const v11 = Object();
const v13 = Object();
const v14 = Object;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
