function main() { 
const v0 = {};
const v1 = [v0,v0,v0,v0,v0];
let [v2,,v3] = v1;
const v5 = Object();
const v6 = {};
const v7 = [v6,v6,v6,v6,v6];
v6.__proto__ = v7;
const v8 = v7();
const v10 = Object();
const v11 = Object.prototype;
const v12 = {};
const v14 = Object();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
