function main() { 
const v1 = [554660.0236810038,554660.0236810038];
const v4 = [v1,554660.0236810038,v1,"string"];
const v5 = v1.push;
const v6 = Reflect.apply(v5,v1,v4);
const v8 = Object();
v8[v1] **= "string";
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
