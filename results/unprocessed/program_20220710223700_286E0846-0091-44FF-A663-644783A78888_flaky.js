function main() { 
const v0 = {};
const v1 = [v0,v0];
v0.__proto__ = v1;
const v6 = Object();
const v7 = [-2794958718,"string"];
const v8 = "string".padStart;
const v9 = Reflect.apply(v8,v0,v7);
const v10 = v1.fill(v8,-2794958718,..."string",..."string",...v1);
const v12 = [76709.00498828781,76709.00498828781,76709.00498828781];
const v13 = 46545;
const v15 = new Int32Array();
const v17 = Object();
const v18 = undefined;
const v19 = undefined;
const v20 = Object(v15);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
