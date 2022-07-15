function main() { 
const v0 = {};
const v2 = [v0,v0,v0,v0,v0];
const v4 = [1.7976931348623157e+308,1.7976931348623157e+308,1.7976931348623157e+308,1.7976931348623157e+308,1.7976931348623157e+308];
const v5 = [1.7976931348623157e+308,Object,v4,Object,...v4,...v2];
const v6 = /[\D]/g;
const v9 = [v6];
const v10 = Promise.reject;
const v11 = Reflect.apply(v10,v5,v9);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
