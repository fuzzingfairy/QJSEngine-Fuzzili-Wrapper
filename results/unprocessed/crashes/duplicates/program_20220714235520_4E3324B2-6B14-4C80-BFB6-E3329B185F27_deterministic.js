function main() { 
const v2 = Object();
const v3 = [1000.0,1000.0,1000.0,1000.0];
const v4 = /.\S\W/uy;
const v7 = v3.unshift(v3);
let v8 = [10000,v7,Object,v2,"number",10000,10000,1000.0,10000,v4];
v8 *= v3;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
