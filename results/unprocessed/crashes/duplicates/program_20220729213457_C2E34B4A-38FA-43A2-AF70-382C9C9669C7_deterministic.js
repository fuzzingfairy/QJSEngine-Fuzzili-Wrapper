function main() { 
const v0 = {};
const v5 = [v0,EvalError,100,1];
v0.__proto__ = v5;
"-536870912".constructor **= v0;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
