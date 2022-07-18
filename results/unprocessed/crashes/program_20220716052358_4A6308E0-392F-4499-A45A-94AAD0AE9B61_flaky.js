function main() { 
const v1 = [3];
v1[8] = v1;
const v3 = {};
const v4 = [v1,v3,v3,v3];
const v6 = Symbol.iterator;
Object[v6] = 3;
const v7 = Object;
const v8 = v4();
const v10 = new Object(Object,3,v4);
const v12 = Object;
const v13 = v8();
const v15 = Object;
const v16 = Math();
const v17 = {};
const v18 = [v4,v17,v17];
const v19 = new Int16Array(445);
const v21 = Object();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
