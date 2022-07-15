function main() { 
const v1 = [1000000000000.0,1000000000000.0,1000000000000.0];
const v2 = {};
const v3 = [v2,v2,v1];
const v4 = {};
const v5 = [v4,v2];
const v7 = v1["push"](...v5,...v3);
const v8 = {};
const v9 = [v1,v8,v8];
const v10 = v7 <= v9;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
