function main() { 
const v0 = {};
let v1 = [v0];
v0.__proto__ = v1;
for (let v4 = 0; v4 < 1; v4++) {
    v1 %= v4;
}
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
