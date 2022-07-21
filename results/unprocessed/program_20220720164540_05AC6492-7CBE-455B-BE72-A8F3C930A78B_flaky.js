function main() { 
const v1 = [NaN,NaN];
const v2 = v1.unshift(v1);
const v4 = v1["toLocaleString"](v2,...v1,..."toLocaleString",...v1);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
