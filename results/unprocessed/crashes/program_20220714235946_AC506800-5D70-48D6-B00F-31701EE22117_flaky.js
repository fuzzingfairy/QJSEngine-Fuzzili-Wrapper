function main() { 
const v1 = [1000.0,1000.0,1000.0,1000.0];
const v2 = /.\S\W/uy;
v1[9] = v1;
const v3 = v2.exec(v1);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
