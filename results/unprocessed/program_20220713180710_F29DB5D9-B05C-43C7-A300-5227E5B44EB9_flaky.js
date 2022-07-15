function main() { 
const v1 = {};
const v3 = Object();
const v5 = [v1,v1,v1,v1,v1];
v1.__proto__ = v5;
const v7 = Object(Object,v5,`object${174733.09699431504}a${Object}undefined${v3}number${v1}pU8QIvgIoP`);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
