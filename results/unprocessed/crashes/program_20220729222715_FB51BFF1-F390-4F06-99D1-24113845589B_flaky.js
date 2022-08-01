function main() { 
const v1 = {};
const v2 = [v1];
const v3 = {};
const v4 = [v3,v3,v3,v3,v3];
for (let v8 = 0; v8 < 7; v8++) {
    v4[v8] = v4;
}
v2[0] = v4;
const v9 = Set >> v2;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
