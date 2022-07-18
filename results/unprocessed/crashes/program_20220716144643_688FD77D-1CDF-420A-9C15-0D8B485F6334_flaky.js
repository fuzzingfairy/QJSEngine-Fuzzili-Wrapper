function main() { 
const v1 = [9007199254740993,9007199254740993];
const v2 = delete v1[9007199254740993];
const v4 = [v1,9007199254740993,v1,9007199254740993];
const v5 = v1.unshift;
const v6 = Reflect.apply(v5,v1,v4);
const v7 = 1000000000.0;
const v8 = Object;
const v9 = v1();
const v11 = "65535"();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
