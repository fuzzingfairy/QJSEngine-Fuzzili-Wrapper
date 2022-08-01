function main() { 
const v1 = [0.0,0.0,0.0,0.0];
const v2 = {};
const v3 = [v2,v2,v2,v2,v2];
const v6 = {};
const v7 = [v6,v6];
const v8 = [0,v3,v6,v1,v6,v3,v3,v7,v1];
const v9 = v1 || v8;
v1[0] = v9;
for (let v12 = 0; v12 < v1; v12++) {
}
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
