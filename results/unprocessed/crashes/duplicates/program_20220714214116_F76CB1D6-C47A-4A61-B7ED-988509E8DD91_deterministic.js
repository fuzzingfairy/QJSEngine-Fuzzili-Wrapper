function main() { 
const v2 = [-3.0,-3.0];
const v4 = [v2,-3.0,v2,NaN,v2];
const v5 = v2.unshift;
const v6 = Reflect.apply(v5,v2,v4);
const v8 = Math.acosh(...v2);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
