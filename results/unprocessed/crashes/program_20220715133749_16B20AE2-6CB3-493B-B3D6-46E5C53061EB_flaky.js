function main() { 
const v1 = {};
const v2 = [v1,v1];
const v3 = {};
const v4 = [v3,v3,v3,v3];
const v7 = Object();
v3.__proto__ = v4;
const v8 = 189244.74274579692 in Object;
const v9 = `bigint${v8}4${v2}undefined${v7}MAX_SAFE_INTEGER${v3}NEGATIVE_INFINITY`;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
