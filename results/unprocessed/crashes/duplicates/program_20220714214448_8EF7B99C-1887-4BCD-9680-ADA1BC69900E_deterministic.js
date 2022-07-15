function main() { 
let v0 = -499664.15081628936;
let v1 = [v0,v0,v0,v0];
[v1,...v0] = v1;
v0[2] = v0;
const v3 = new Float64Array(v0);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
