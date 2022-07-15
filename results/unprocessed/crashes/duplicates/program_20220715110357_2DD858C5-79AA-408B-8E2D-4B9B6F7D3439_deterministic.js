function main() { 
const v0 = {};
const v1 = [v0,v0,v0];
v0.__proto__ = v1;
let v2 = Promise;
v2 = v1;
let [v3,v4,v5] = v1;
const v7 = [v5,v4];
const v8 = v2.lastIndexOf;
const v9 = Reflect.apply(v8,v0,v7);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
