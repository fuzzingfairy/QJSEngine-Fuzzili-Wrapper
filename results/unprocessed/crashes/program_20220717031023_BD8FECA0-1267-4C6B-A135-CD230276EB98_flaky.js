function main() { 
const v1 = [-1073741824,-1073741824,-1073741824,-1073741824];
const v2 = ~v1;
v1[65537] = v1;
const v4 = [-1073741824,v2];
const v5 = v1.copyWithin;
const v6 = Reflect.apply(v5,v1,v4);
const v7 = [v6,-1073741824];
const v9 = [v2,2285817058,2285817058,2285817058];
const v10 = Object;
const v11 = v6();
const v13 = v1();
const v14 = Object;
const v15 = Object();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
