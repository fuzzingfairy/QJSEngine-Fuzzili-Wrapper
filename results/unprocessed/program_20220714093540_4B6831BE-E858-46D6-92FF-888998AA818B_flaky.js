function main() { 
const v1 = [1.0,1.0,1.0];
const v3 = Object();
const v4 = [1.0,1.0,1.0,v1,1.0];
const v5 = {};
const v6 = [v5,v5,v5,v5];
v1[8] = v4;
const v7 = {};
const v8 = [v1,v7,v7,v7];
const v9 = 1000000000.0;
const v10 = v1();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
