function main() { 
const v0 = {};
const v1 = [v0,v0,v0,v0,v0];
v0.__proto__ = v1;
const v4 = v1["join"](v1,-2745199566,...v1,..."join",-2745199566);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
