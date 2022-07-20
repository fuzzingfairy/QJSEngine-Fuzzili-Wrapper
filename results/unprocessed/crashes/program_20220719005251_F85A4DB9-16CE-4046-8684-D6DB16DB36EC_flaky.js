function main() { 
const v0 = {};
const v1 = [v0,v0];
const v3 = [1000000000.0];
const v4 = [v3,v1];
const v5 = v1.unshift(1000000000.0,v1);
let [v6,v7,v8,v9] = v4;
const v10 = v1 & v7;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
