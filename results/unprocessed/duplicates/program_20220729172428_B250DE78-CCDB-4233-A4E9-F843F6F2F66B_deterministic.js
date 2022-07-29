function main() { 
const v1 = {};
const v2 = [v1,v1];
v1.__proto__ = v2;
const v5 = Error(`byteLength${Error}512${Infinity}vGJgoBHlXY${v2}undefined${v1}symbol`);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
