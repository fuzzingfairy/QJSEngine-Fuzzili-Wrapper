function main() { 
const v2 = [-337432.9939658487,-151812047];
let v3 = undefined;
v3 = v2;
v2[3] = v3;
const v4 = [v2];
const v6 = Object.defineProperty(v4,v2);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
