function main() { 
const v0 = {};
const v1 = [v0,v0,v0,v0];
v0.__proto__ = v1;
const v4 = v0.__proto__;
const v5 = delete v1.length;
const v7 = new Uint8ClampedArray();
const v9 = Object();
const v11 = v0 >= Object;
const v12 = Object();
const v15 = Object();
v12.__proto__ = v7;
const v18 = [133591.50648523727,133591.50648523727,133591.50648523727];
const v19 = Object(31241,v4,v5,"length");
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
