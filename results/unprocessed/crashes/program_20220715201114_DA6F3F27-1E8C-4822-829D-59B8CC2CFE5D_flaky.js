function main() { 
const v1 = Object();
const v2 = {};
const v3 = [v2,v2];
v2.__proto__ = v3;
const v4 = `97HEGK9Fr0${v3}clcKe256rR${v3}-1024${Object}5T81IgxDve${v1}toString`;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
