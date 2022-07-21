function main() { 
const v0 = {};
const v1 = [v0,v0,v0,v0,v0];
v0.__proto__ = v1;
const v4 = v1();
const v5 = [-1.7976931348623157e+308,-1.7976931348623157e+308];
v4.valueOf = Object;
const v7 = Object();
const v9 = Object();
const v10 = "-1073741824";
const v11 = [-1.7976931348623157e+308,-1.7976931348623157e+308,-1.7976931348623157e+308];
const v14 = Object();
const v15 = [3781994289];
const v16 = v7;
const v17 = new Object(v1,Object,Object,v4);
const v20 = Object();
const v21 = Object();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
