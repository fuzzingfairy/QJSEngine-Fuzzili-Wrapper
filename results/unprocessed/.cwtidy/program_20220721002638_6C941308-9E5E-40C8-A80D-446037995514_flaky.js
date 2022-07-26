function main() { 
const v3 = [965468.5853212718];
const v4 = {"__proto__":"undefined","b":v3,"c":"string","d":v3,"e":965468.5853212718,"length":965468.5853212718,"toString":"undefined","valueOf":v3};
const v7 = v3.slice;
const v8 = Reflect.apply(v7,Object,v4);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
