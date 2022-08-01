function main() { 
const v1 = {};
const v2 = {};
const v3 = [v2,v2,v2,v2];
const v4 = {};
const v5 = [v4];
v2.__proto__ = v3;
const v6 = `AcGW0wIYry${v1}93MkdJ7sYc${v2}search${v5}16${2.220446049250313e-16}268435456`;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
