function main() { 
const v1 = {};
const v2 = [v1,v1,v1,v1,v1];
const v3 = v2.fill(v2);
const v4 = new Int16Array(...v2);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
