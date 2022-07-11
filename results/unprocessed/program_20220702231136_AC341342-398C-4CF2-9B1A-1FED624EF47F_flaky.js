function main() { 
const v0 = {};
const v1 = [v0];
const v3 = Object(v1);
const v5 = (129).__proto__;
v1[3] = v3;
const v8 = Symbol.unscopables;
const v10 = Math.min(Object,v1);
v3.toString = v5;
const v11 = Object;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
