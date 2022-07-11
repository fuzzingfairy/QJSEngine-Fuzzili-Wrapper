function main() { 
const v1 = [536870912];
v1[3] = v1;
for (let v2 in v1) {
    [...v2] = v1;
}
const v4 = Object();
const v5 = "message";
const v6 = -9007199254740991;
const v7 = {};
const v8 = `
    const v10 = Object();
    function v11(v12) {
    }
    let v13 = v11;
    function v14(v15,v16) {
        v13 = v16;
    }
    const v18 = new Promise(v14);
`;
const v20 = eval(v8);
const v21 = [v7];
const v22 = [536870912,536870912,536870912,536870912,536870912];
const v24 = [3];
const v27 = Object();
const v29 = Object();
const v30 = `-256${536870912}sticky${v1}znPWpjBlzW${536870912}function`;
const v31 = Object();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
