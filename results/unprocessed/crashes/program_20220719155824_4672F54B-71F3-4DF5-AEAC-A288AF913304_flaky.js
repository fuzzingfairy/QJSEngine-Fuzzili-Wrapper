function main() { 
const v0 = {};
const v1 = [v0];
const v3 = 1;
const v5 = [v0,v1];
const v6 = Object.setPrototypeOf;
const v7 = Reflect.apply(v6,v1,v5);
const v9 = Symbol.unscopables;
const v10 = v0[v9];
const v11 = `string${v10}setPrototypeOf${v1}-2`;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
