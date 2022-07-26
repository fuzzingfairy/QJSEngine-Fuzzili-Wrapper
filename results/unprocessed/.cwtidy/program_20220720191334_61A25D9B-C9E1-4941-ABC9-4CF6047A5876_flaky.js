function main() { 
const v1 = [4.0,4.0,4.0,4.0,4.0];
const v2 = /8\sl*/iu;
const v4 = {};
const v5 = [v4,v4];
const v8 = Object();
const v9 = [4.0,4.0];
v4.__proto__ = v5;
const v10 = [Object,v5,v2,v5,v9,Function,v8,Object,v1,v9];
const v11 = Object();
const v12 = [v10,v9,-0.0,4.0,v4,Function,v4];
const v14 = v4["setPrototypeOf"](Object);
const v15 = Object(v9,v5,v10,v14);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
