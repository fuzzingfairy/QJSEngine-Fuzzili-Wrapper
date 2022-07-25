function main() { 
let v0 = EvalError;
let v1 = 42002;
let v2 = Int8Array;
const v3 = [v1,v1];
let v4 = {};
({"__proto__":v2,"caller":v1,"constructor":v4,"global":v4,"length":v0,"valueOf":v2,} = v3);
const v5 = v3.reduce(v2);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
