function main() { 
const v0 = {};
const v1 = [v0,v0,v0,v0,v0];
const v2 = `
    v0.__proto__ = v1;
`;
const v4 = eval(v2);
const v5 = /\w/i;
const v7 = [3682428300,3682428300,3682428300,3682428300,3682428300];
const v9 = Object();
const v10 = /v\w\W/imuy;
v0[v1] ^= v0;
const v12 = Object();
const v13 = RegExp;
const v15 = `bigint${v12}number`;
const v18 = Object["assign"](...v12,Array,...v7,v2,v4,...v1);
const v19 = Object();
const v21 = Object();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
