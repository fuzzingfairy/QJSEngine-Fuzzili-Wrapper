function main() { 
let v0 = 65348;
const v1 = [v0,v0,v0,v0,v0,v0,v0];
v1[8] = v1;
v0 = v1;
const v3 = new Int32Array(v0);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
