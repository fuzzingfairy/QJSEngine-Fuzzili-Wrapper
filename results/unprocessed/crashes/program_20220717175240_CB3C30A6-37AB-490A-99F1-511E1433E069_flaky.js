function main() { 
const v0 = {};
const v1 = [v0,v0];
v0.__proto__ = v1;
const v3 = Object();
const v4 = Object;
let v5 = Object;
const v6 = v5();
let v8 = Object();
const v10 = Object();
[v5,v8,v8] = v1;
const v12 = Object();
const v13 = `1024${v5}size${v3}VMbVkJAvce`;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
