function main() { 
const v2 = ["-65536"];
const v3 = [1.0,1.0];
const v4 = {};
const v5 = [v4,1.0,v4,v4,v4];
const v7 = Object();
const v8 = Object.setPrototypeOf(v4,v5);
Object.prototype /= v5;
const v9 = v8[v7];
const v10 = Object(v7);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
