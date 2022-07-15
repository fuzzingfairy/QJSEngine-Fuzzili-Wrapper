function main() { 
let v0 = -1000000.0;
const v1 = [v0];
v0 = v1;
const v3 = [v0];
const v4 = v1.push;
const v5 = Reflect.apply(v4,v1,v3);
const v6 = v1();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
