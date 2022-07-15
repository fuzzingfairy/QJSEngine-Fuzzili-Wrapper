function main() { 
const v1 = [2.220446049250313e-16,2.220446049250313e-16];
const v2 = {"construct":v1,"setPrototypeOf":2.220446049250313e-16};
const v4 = new Proxy(v1,v2);
v2.__proto__ = v4;
const v5 = v2.sqrt();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
