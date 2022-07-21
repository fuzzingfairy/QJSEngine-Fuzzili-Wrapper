function main() { 
const v0 = {};
let v1 = [v0,v0,v0,v0,v0];
v0.__proto__ = v1;
const v4 = Object();
let v7 = Object();
const v9 = Object();
const v10 = [1.7976931348623157e+308,v1,1.7976931348623157e+308];
const v11 = [v10,1.7976931348623157e+308,1.7976931348623157e+308];
let v12 = Object;
[,v12,...v1] = v1;
const v13 = {"__proto__":Int8Array,"a":v1,"b":v11,"constructor":Object,"d":v4,"toString":v4};
const v15 = Object();
v7 = Int8Array;
const v16 = v12();
const v17 = typeof v11;
const v19 = v17 === "object";
const v21 = Object();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
