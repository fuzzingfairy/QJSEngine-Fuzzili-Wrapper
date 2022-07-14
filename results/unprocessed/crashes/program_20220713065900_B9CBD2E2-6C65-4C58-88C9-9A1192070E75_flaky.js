function main() { 
const v0 = {};
const v1 = [v0,v0];
v0.__proto__ = v1;
const v2 = typeof v1;
const v4 = v2 === "object";
const v6 = `c${Int16Array}10000${"object"}B08XmjUghn${Int16Array}asyncIterator${v1}boolean`;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
