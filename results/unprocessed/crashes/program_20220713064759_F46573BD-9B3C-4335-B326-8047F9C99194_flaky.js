function main() { 
const v1 = [NaN,NaN,NaN,NaN];
const v2 = [v1];
const v3 = {};
const v5 = [v3,NaN,v2,NaN];
const v6 = v1.push;
const v7 = Reflect.apply(v6,v1,v5);
const v8 = v7 | v1;
const v9 = 0;
const v11 = Object();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
