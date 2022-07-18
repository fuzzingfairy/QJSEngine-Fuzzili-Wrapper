function main() { 
const v1 = [1000000000.0,1000000000.0];
const v2 = {};
const v4 = [1000000000.0,1000000000.0,v1,1000000000.0];
const v5 = v1.splice;
const v6 = Reflect.apply(v5,v1,v4);
const v7 = [v2,v4,v2];
const v9 = Object();
const v10 = v9 < v7;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
