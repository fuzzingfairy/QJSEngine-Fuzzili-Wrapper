function main() { 
const v0 = /v/im;
const v2 = [NaN,v0,NaN,NaN];
v2[0] = v2;
v0.unicode += v2;
const v4 = [64,NaN];
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
