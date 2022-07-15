function main() { 
const v2 = [3.0,3.0];
const v4 = [EvalError];
const v5 = v2.sort;
const v6 = Reflect.apply(v5,v2,v4);
const v7 = [v5,v6];
const v8 = v4.reduce;
const v9 = Reflect.apply(v8,v2,v7);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
