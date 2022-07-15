function main() { 
const v2 = [2.0,2.0,2.0,2.0,2.0];
const v4 = ["boolean"];
const v5 = "boolean".codePointAt;
const v8 = {"get":v5};
const v9 = Object.defineProperty(v4,2147483649,v8);
const v10 = Reflect.apply(v5,v2,v4);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
