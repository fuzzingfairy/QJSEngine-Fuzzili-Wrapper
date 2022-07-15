function main() { 
const v1 = [-3.0,-3.0,-3.0,-3.0];
const v2 = v1;
const v5 = [v1];
const v6 = v2.fill;
const v7 = Reflect.apply(v6,v2,v5);
const v8 = Object;
const v9 = `bigint${v1}bigint`();
const v10 = v6();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
