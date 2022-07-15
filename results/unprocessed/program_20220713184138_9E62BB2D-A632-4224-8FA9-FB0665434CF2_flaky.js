function main() { 
const v0 = {};
const v1 = [v0,v0,v0,v0];
v0.__proto__ = v1;
const v4 = [v1];
const v5 = v1.join;
const v6 = Reflect.apply(v5,v1,v4);
const v7 = [16,16,16,16];
const v8 = [16];
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
