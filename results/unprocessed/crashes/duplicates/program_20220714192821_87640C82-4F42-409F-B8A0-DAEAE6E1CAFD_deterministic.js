function main() { 
const v3 = Object();
const v4 = [3.0,3.0,3.0,3.0,3.0];
const v6 = Object();
const v8 = [v4,v4,v6];
const v9 = Promise.all;
const v10 = Reflect.apply(v9,v3,v8);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
