function main() { 
const v1 = [0.0,0.0,0.0,0.0];
const v5 = Symbol.unscopables;
const v6 = Object[v5];
const v8 = [v6];
const v9 = Promise.reject;
const v10 = Reflect.apply(v9,v1,v8);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
