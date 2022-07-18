function main() { 
let v0 = Proxy;
const v2 = {};
const v3 = [v2,v2,v2,v2];
let v4 = 512;
[v4,,v0] = v3;
v4.__proto__ = v3;
const v5 = parseFloat(v0);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
