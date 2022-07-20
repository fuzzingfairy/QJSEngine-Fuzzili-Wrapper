function main() { 
const v1 = [520013.13429328636];
const v2 = [v1];
const v3 = v1.unshift(...v2);
const v4 = v1();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
