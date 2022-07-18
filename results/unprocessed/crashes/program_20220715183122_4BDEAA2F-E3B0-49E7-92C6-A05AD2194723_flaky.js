function main() { 
const v1 = [4026852243,4026852243,4026852243,4026852243];
v1[1] = v1;
const v4 = {"a":v1,"b":v1,"c":SyntaxError,"d":Set,"e":4026852243,"length":SyntaxError,"toString":SyntaxError};
v4.a -= Set;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
