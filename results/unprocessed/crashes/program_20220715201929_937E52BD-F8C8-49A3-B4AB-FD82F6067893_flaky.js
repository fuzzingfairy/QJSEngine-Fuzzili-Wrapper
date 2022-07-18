function main() { 
const v1 = [-5.0,-5.0];
const v3 = [-5.0,v1];
const v4 = v1.unshift;
const v5 = Reflect.apply(v4,v1,v3);
const v7 = Object();
v1[v3] = v5;
const v9 = Object();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
