function main() { 
const v1 = [-1000000000000.0,-1000000000000.0,-1000000000000.0];
v1[9] = v1;
const v3 = [3769255543,3769255543,3769255543,3769255543];
let {"constructor":v4,"length":v5,"toString":v6,} = v3;
const v8 = [v1,v6];
const v9 = v4.apply;
const v10 = Reflect.apply(v9,v6,v8);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
