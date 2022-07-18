function main() { 
const v1 = [1000000000.0];
v1[1000000000.0] *= 1000000000.0;
v1[1] = v1;
with (v1) {
    valueOf = v1;
    const v3 = Object();
}
const v5 = "536870912";
const v7 = [1000000000.0,1000000000.0,1000000000.0,1000000000.0];
const v9 = Object();
const v11 = Object();
let v12 = Object();
const v13 = v1.values(2147483647,v12,Object,v12);
v12 %= v1;
const v14 = `number`;
const v16 = Object();
const v17 = {};
const v18 = [v17];
const v21 = new Uint8ClampedArray(9149);
const v23 = Object();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
