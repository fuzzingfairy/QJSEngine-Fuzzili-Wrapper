function main() { 
const v0 = {};
const v1 = [v0,v0,v0,v0];
v0.__proto__ = v1;
const v3 = Object();
v1.length = v0;
const v4 = Object;
for (const v5 of v1) {
    const v6 = v5 !== v3;
    for (const v7 in v5) {
    }
}
const v9 = Object();
const v10 = Float32Array;
const v12 = Object();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
