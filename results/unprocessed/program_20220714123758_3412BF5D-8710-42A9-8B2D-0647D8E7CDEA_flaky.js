function main() { 
const v0 = {};
const v1 = [v0];
v0.__proto__ = v1;
const v4 = new Int8Array();
const v5 = Object();
const v6 = {};
for (let v9 = v0; v9 < 100; v9++) {
}
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
