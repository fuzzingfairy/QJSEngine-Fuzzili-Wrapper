function main() { 
const v1 = [4.0,4.0];
v1[2] = v1;
const v3 = Object();
const v4 = -v1;
const v7 = Object();
const v8 = {"apply":Object,"call":Object,"deleteProperty":Object,"getOwnPropertyDescriptor":Object,"has":Object,"isExtensible":Object,"ownKeys":Object,"preventExtensions":Object,"set":Object,"setPrototypeOf":Object};
const v10 = new Proxy(v1,v8);
const v12 = Object();
const v14 = Object();
const v16 = [-402753562,-402753562,-402753562];
const v17 = {};
const v19 = Object();
const v21 = Object();
let {"call":v22,"message":v23,"preventExtensions":v24,"sticky":v25,} = v10;
const v26 = [v17];
const v27 = {};
const v28 = [v27,v27,v27,v27];
let v30 = Object;
const v31 = [4.0];
const v32 = "536870912" > v31;
const v34 = Object();
const v35 = --v30;
const v36 = v30();
const v37 = Object();
const v39 = Object();
const v41 = Object();
const v43 = v12["now"]();
const v44 = Object(v10,v37,4.0,Object,v36);
const v45 = Object(v10,Proxy,-402753562,v7,v10);
const v46 = Object;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
