function main() { 
const v1 = {};
const v2 = [-2130528620,v1,-2130528620,v1,v1,v1,-2130528620,-2130528620];
v1.__proto__ = v2;
const v3 = [v1,v1,v1];
const v5 = Math.cbrt(v3);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
