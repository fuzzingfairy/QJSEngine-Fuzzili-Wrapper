function main() { 
const v0 = {};
const v1 = [v0];
v0.__proto__ = v1;
for (let v5 = 0; v5 < 2; v5++) {
    v1[v5] *= v5;
}
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
