function main() { 
const v2 = Object();
const v3 = typeof 4;
const v5 = v3 === "function";
const v8 = Object[v5];
const v9 = Object();
const v11 = [v8,"function",Promise,v2,"function"];
const v12 = Promise.race;
const v13 = Reflect.apply(v12,v9,v11);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
