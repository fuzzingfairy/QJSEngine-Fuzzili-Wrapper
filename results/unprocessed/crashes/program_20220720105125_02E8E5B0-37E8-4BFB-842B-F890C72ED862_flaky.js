function main() { 
const v0 = {};
const v1 = [v0,v0,v0,v0];
v0.__proto__ = v1;
const v3 = v1 + v1;
const v5 = {"get":Error};
const v7 = Object.defineProperty(v0,"b",v5);
const v9 = [65535,65535];
const v10 = {};
const v11 = [v10,v10,v10,v10,v10];
const v12 = "bigint";
const v14 = Object();
const v16 = Object();
const v18 = Object();
const v19 = [65535];
const v20 = Object(v14,v18,v19,Object,v1);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
