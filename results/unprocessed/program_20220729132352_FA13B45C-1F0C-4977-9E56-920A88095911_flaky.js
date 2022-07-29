// Minimizing 0BE693FF-B66C-4E5C-9631-D01A06A7DF3A
function main() { 
const v2 = {"defineProperty":RangeError};
const v4 = new Proxy(Object,v2);
v2.__proto__ = v4;
const v5 = v4();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
