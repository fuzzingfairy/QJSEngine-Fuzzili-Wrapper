function main() { 
const v1 = [-1024,-1024,-1024];
const v3 = [-2.2250738585072014e-308,-2.2250738585072014e-308];
const v6 = [v3,-2.2250738585072014e-308,100,-2.2250738585072014e-308];
const v7 = v1.unshift;
const v8 = Reflect.apply(v7,v3,v6);
const v9 = delete v3[v3];
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
