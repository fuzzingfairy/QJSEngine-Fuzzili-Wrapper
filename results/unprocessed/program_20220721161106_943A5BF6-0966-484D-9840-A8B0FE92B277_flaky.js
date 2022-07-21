function main() { 
const v0 = 1000.0;
const v1 = {};
const v2 = [v1,v1,v1];
const v3 = {};
const v5 = new Proxy(v2,v3);
const v6 = v1.__proto__;
const v8 = [v1,6,6,6,6];
const v9 = 4207748839;
const v10 = v2.__proto__;
v5.__proto__ = v5;
let v11 = Object;
const v12 = v11();
v11 = v2;
const v14 = Object();
const v16 = Object();
const v17 = v5();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
