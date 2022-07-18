function main() { 
const v2 = [-1000.0,-1000.0,-1000.0];
const v3 = v2[-1000.0];
const v5 = [v2,v3,SyntaxError];
const v6 = v2.unshift;
const v7 = Reflect.apply(v6,v2,v5);
const v8 = {};
const v9 = [v8,v8,v8];
v9[v5] = v6;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
