function main() { 
const v0 = {};
const v1 = [v0];
const v4 = [v0,v1];
const v5 = Object.setPrototypeOf;
const v6 = Reflect.apply(v5,v1,v4);
const v8 = v0["parse"]();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
