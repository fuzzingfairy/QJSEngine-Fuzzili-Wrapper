function main() { 
const v1 = undefined;
const v3 = Object();
const v4 = true;
const v5 = Object.prototype;
const v6 = {};
const v7 = [v6];
const v8 = [-1.0,v7,-1.0,-1.0,-1.0];
let v9 = Object;
const v10 = v9();
v6.__proto__ = v7;
let {"__proto__":v11,"constructor":v12,} = v8;
const v13 = 2.0;
const v15 = Object();
const v18 = [-4060979174,-4060979174];
const v20 = Object();
v9 |= v7;
const v21 = new v12(v9);
const v22 = Object(v5,"127",v18);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
