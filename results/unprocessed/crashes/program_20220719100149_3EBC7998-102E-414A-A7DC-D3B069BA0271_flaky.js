function main() { 
const v0 = {};
const v1 = [v0,v0,v0,v0];
const v3 = Object();
v0.__proto__ = v1;
const v4 = `NaN${v3}string${Object}bigint${v1}16${v1}split`;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
