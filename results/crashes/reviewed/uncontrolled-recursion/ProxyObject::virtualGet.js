function main() { 
const v9 = {};
const v11 = new Proxy(Object,v9);
v9.__proto__ = v11;
v9.__proto__ = v11;
}
main();
// NOTE: this crashes bc resource exhaustion, see while loop
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
