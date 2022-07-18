function main() { 
const v0 = {};
const v1 = [v0,v0];
v0.__proto__ = v1;
const v3 = Object();
Object.__proto__ = v0;
v1[-532144726] >>= v0;
const v6 = new Int8Array(42115);
const v7 = 42115 in v6;
const v9 = v3["getUTCMonth"](Int8Array,...v1,v7,v7);
const v10 = Object;
const v11 = {};
const v12 = [v11,v11,v11,v11];
for (let v17 = 0; v17 < 100; v17++) {
    const v18 = Object(Int8Array,Object,Int8Array);
}
const v19 = Object();
const v21 = Object();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
