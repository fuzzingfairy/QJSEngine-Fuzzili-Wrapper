function main() { 
const v1 = [4.0,4.0,4.0];
const v2 = [4.0,4.0,4.0,4.0];
v1[0] = v1;
let {"__proto__":v5,"buffer":v6,"constructor":v7,"flags":v8,} = v2;
v5[1000000000.0] -= v1;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
