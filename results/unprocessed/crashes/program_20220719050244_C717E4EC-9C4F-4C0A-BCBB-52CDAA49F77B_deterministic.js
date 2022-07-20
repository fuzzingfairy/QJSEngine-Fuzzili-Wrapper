function main() { 
function v2(v3,v4) {
}
const v6 = {"apply":v2,"construct":v2,"preventExtensions":v2};
const v8 = new Proxy(Promise,v6);
const v10 = new Int16Array();
const v12 = [895022.3282093091,Object];
const v13 = v8.reject;
const v14 = Reflect.apply(v13,v10,v12);
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
