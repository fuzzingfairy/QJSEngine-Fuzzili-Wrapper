function main() { 
const v1 = [2.220446049250313e-16];
const v2 = [v1];
const v4 = v1["unshift"](...v2);
const v5 = v2();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
