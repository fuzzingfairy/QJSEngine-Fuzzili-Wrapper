function main() { 
const v0 = {};
const v1 = [v0,v0];
const v2 = -2147483649;
const v4 = [-536870912,-536870912,-536870912,-536870912,-536870912];
const v5 = "toPrimitive";
const v7 = Object();
const v9 = Object();
v0.__proto__ = v1;
Object.valueOf = Object;
for (let [v11,v12] of v1) {
    const v13 = Object;
    const v14 = v12();
}
const v15 = Object();
const v16 = Object(Object,Object,v7,v7,-536870912);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
