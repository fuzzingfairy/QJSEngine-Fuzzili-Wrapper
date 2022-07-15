function main() { 
const v0 = {};
const v1 = [v0];
const v4 = [v1];
v0.__proto__ = v4;
const v6 = {"b":-3607561764,"d":undefined};
const v8 = [-2029132986,v6];
const v9 = v6.toLocaleString;
const v10 = Reflect.apply(v9,v0,v8);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
