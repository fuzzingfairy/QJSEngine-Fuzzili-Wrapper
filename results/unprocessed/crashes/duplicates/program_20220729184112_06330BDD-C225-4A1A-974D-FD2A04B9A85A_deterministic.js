function main() { 
const v1 = {};
const v2 = [v1];
const v4 = {};
let v6 = Object.defineProperty(v2,"a",v4);
const v7 = v2.unshift(v6);
v6 **= -0.0;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
