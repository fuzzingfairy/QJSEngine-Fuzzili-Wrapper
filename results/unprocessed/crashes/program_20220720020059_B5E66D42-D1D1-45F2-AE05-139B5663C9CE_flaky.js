function main() { 
const v2 = [-1000000000.0,-1000000000.0,-1000000000.0];
Symbol.__proto__ = v2;
v2[1] = v2;
const v5 = Object();
const v6 = {};
const v9 = Object();
const v12 = [4068001173,1,4068001173];
const v13 = v2.copyWithin;
const v14 = Reflect.apply(v13,v2,v12);
const v15 = Object();
let v16 = Object;
let v18 = Object();
const v19 = v14();
[v16,,...v18] = v12;
const v21 = Object();
const v22 = Object;
const v23 = Reflect();
const v24 = Object(Symbol,-1000000000.0);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
