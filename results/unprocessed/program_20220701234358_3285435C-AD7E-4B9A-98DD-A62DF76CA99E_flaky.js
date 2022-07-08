function main() { 
const v1 = [1000.0,1000.0];
const v3 = [1000.0,v1,v1,v1,v1];
const v4 = v1.push;
const v5 = Reflect.apply(v4,v1,v3);
throw v3;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
