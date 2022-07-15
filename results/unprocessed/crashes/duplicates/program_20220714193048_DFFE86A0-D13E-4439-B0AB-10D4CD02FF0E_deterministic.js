function main() { 
const v1 = [1000000000.0];
const v3 = Object();
const v5 = [v3,v3,1000000000.0,1000000000.0,v1,Object];
const v6 = v1.splice;
const v7 = Reflect.apply(v6,v1,v5);
v6.valueOf ^= v1;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
