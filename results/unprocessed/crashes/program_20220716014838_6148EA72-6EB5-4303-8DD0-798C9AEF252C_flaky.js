function main() { 
const v1 = [-0.0,-0.0,-0.0];
const v2 = {};
const v3 = [v2,v2,v2,v2];
v2.__proto__ = v3;
const v6 = [v1,v2,v1,-957131974];
const v7 = v2.indexOf;
const v8 = Reflect.apply(v7,v2,v6);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
