function main() { 
const v1 = [423534.67171789217,423534.67171789217,423534.67171789217];
const v2 = [423534.67171789217,v1,423534.67171789217,423534.67171789217];
const v4 = [v1,423534.67171789217,v2,v1];
const v5 = v1.splice;
const v6 = Reflect.apply(v5,v2,v4);
const v7 = v4();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
