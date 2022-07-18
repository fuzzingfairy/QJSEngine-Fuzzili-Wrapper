function main() { 
const v1 = [9007199254740993];
const v2 = v1 >= v1;
const v4 = [v1,v2];
const v5 = v1.push;
const v6 = Reflect.apply(v5,v1,v4);
const v7 = v4();
const v8 = {};
const v9 = [v8,v8];
const v11 = Object();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
