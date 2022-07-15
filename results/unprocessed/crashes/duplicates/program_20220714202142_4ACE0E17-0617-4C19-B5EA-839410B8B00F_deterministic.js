function main() { 
const v1 = [1000.0,1000.0,1000.0,1000.0];
let v2 = 1000.0;
v2 = v1;
const v3 = v1.unshift(1000.0,v1);
const v4 = v2();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
