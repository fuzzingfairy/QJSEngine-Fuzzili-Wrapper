function main() { 
const v1 = [-2640609325,-2640609325,-2640609325,-2640609325,-2640609325];
const v2 = [-2640609325];
v2[5] = v2;
const v4 = typeof `caller${v1}object${v2}unicode`;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
