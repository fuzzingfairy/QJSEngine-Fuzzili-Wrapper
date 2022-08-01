function main() { 
const v0 = {};
const v1 = [v0,v0,v0,v0];
const v4 = [-1.7976931348623157e+308,-1.7976931348623157e+308,-1.7976931348623157e+308];
const v6 = [v4];
const v7 = Promise.resolve;
const v8 = Reflect.apply(v7,v1,v6);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
