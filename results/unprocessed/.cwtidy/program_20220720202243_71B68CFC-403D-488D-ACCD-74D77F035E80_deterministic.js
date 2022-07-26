function main() { 
const v1 = [141918.1542623099,141918.1542623099,141918.1542623099,141918.1542623099];
const v4 = [v1,-4294967296,v1,v1,v1];
const v5 = v4.unshift;
const v6 = Reflect.apply(v5,v1,v4);
const v7 = [-4294967296,-4294967296];
const v8 = v4();
const v9 = v5 > v7;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
