function main() { 
const v1 = {};
const v2 = [v1,"HSLDdmQswP",v1,v1];
const v4 = ["HSLDdmQswP",v1,v2,"HSLDdmQswP"];
const v5 = v2.push;
const v6 = Reflect.apply(v5,v2,v4);
const v8 = v6 < v4;
const v9 = v8 ? v6 : v4;
const v10 = {};
let [v11] = v6;
const v13 = Object();
const v15 = Object();
v5[-65537] = v5;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
