function main() { 
const v1 = /\sA.\s/gyum;
const v2 = [128,128,128];
const v4 = [v1,v2];
const v5 = v2.push;
const v6 = Reflect.apply(v5,v2,v4);
const v7 = {};
const v8 = [v7];
v8.__proto__ /= v4;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
