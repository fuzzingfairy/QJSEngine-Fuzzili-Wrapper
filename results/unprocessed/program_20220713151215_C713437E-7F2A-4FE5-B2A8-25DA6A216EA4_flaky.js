function main() { 
const v2 = Object();
const v3 = [Object,v2,4294967296,4294967296,Object,4294967296,4294967296,Object,4294967296];
Object.__proto__ = v3;
const v4 = {};
const v7 = [4294967296,4294967296];
const v8 = `number${v7}UcmxUG48rm${Object}number${Object}boolean${v4}isConcatSpreadable`;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
