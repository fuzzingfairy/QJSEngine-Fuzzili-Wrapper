function main() { 
const v0 = {};
const v1 = [v0,v0];
v0.__proto__ = v1;
const v2 = Object;
const v3 = v1();
const v4 = {};
const v5 = [v4,v4,v4];
for (let v9 = 0; v9 < 100; v9++) {
}
const v10 = Object;
const v12 = Object();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
