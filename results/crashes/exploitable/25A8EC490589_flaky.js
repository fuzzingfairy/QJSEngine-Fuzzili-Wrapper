function main() { 
const v0 = {};
const v1 = [v0,v0,v0,v0,v0];
const v2 = v0 in v1;
const v3 = {"isExtensible":v0};
const v5 = new Proxy(v0,v3);
const v8 = Object();
const v9 = Object;
const v10 = Object();
const v12 = Symbol.species;
const v13 = v10[v12];
const v16 = Object();
const v18 = Object();
const v19 = [-223108.56485017668];
const v21 = v19["splice"](v5,v5,Proxy,v19,-223108.56485017668);
const v22 = [-223108.56485017668,-223108.56485017668,-223108.56485017668];
const v23 = [-223108.56485017668,-223108.56485017668];
const v24 = delete v21[v19];
const v26 = Object();
const v27 = -4032396964;
v23[9] = v1;
v23[-1] >>= "splice";
const v29 = Object();
const v31 = Object();
const v33 = Object();
switch (v8) {
case v21:
    for (const v34 of v1) {
    }
    break;
case v31:
    const v35 = {};
    const v36 = [v35,v35,v35,v35,v35];
    break;
case v8:
    const v37 = Object(v8,v18,-223108.56485017668,v12);
    break;
case -223108.56485017668:
case Object:
    const v39 = v21["substring"](v8,v22);
default:
    break;
case v18:
    break;
case Object:
    {
    }
}
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
