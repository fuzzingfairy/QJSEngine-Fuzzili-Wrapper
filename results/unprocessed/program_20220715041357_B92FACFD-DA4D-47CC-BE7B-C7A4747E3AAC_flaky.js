function main() { 
const v1 = [9007199254740993,9007199254740993,9007199254740993,9007199254740993];
const v3 = [9007199254740993,9007199254740993,v1,v1,v1,v1];
const v4 = v1.splice;
const v5 = Reflect.apply(v4,v1,v3);
const v7 = v1 <= "isConcatSpreadable";
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
