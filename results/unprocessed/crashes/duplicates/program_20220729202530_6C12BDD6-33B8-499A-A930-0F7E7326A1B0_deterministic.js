function main() { 
const v0 = {};
const v1 = [v0,v0,v0,v0];
let v2 = undefined;
v2 = v1;
v0.__proto__ = v2;
for (let v5 = 0; v5 < 1; v5 = v5 + v1) {
}
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
