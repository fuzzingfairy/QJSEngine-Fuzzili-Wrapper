function main() { 
const v0 = {};
const v1 = [v0,v0];
v0.__proto__ = v1;
const v2 = Object;
const v3 = v1();
const v4 = Date;
const v9 = "4096"();
const v10 = /i\D*/u;
const v11 = [444078.49159785686,"match",444078.49159785686,444078.49159785686];
const v13 = Object();
const v14 = Object(v10);
const v15 = Object;
const v16 = v0();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
