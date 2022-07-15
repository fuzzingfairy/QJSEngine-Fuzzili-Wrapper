function main() { 
const v0 = Infinity;
const v1 = {};
const v2 = [v1,v1];
v1.__proto__ = v2;
for (let v6 = 0; v6 < 10; v6++) {
    const v7 = v1.isFrozen(v2,v1,1,v6);
}
const v9 = Math.tanh();
const v11 = Object();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
