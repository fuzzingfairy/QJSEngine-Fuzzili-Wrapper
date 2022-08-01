function main() { 
const v1 = [3232148633,3232148633,3232148633,3232148633,3232148633];
let v2 = v1;
const v4 = Object();
let v6 = Object();
let v7 = Object(v4,v4,v1);
let v9 = new Int32Array();
function v10(v11) {
    let v13 = Object();
    const v15 = Object();
    for (let v16 in v2) {
        ({"E":v16,"MIN_VALUE":v2,"NEGATIVE_INFINITY":v7,"POSITIVE_INFINITY":v6,"__proto__":v9,"unscopable":v13,} = v15);
    }
}
const v17 = 0;
const v18 = 20;
const v19 = 1;
const v20 = v10();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
