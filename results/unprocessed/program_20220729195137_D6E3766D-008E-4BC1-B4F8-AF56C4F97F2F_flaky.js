function main() { 
const v1 = /(OFA9X+)/gyi;
const v2 = NaN;
const v3 = null;
const v4 = true;
const v5 = {};
const v6 = [v5];
const v7 = "a";
const v8 = {};
let v9 = Object;
let v11 = v1["test"]();
function v12() {
    [v11,,v9] = "number";
    const v13 = {};
    const v14 = [v13];
    const v15 = {};
    const v16 = [v15];
    const v17 = -2.0;
    const v18 = {};
    const v19 = [v18];
    let [v20] = "number";
    with (v1) {
    }
}
const v21 = 0;
const v22 = 20;
const v23 = 1;
const v24 = v12();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
