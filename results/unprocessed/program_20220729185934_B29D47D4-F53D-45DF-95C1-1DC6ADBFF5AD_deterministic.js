function main() { 
const v0 = {};
const v1 = [v0,v0,v0];
const v3 = Object();
for (let v8 = 0; v8 < 20; v8++) {
    const v9 = {"b":v3,"d":v8,"n":Object,"o":Object};
    const v12 = [v1];
    const v13 = Promise.resolve;
    const v14 = Reflect.apply(v13,v9,v12);
}
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
