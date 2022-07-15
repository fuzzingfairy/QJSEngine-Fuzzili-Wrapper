function main() { 
const v1 = [1000000000000.0,1000000000000.0];
const v4 = Object(v1);
const v5 = {};
const v6 = [v5];
const v9 = [0,0,-536870912,,v5,v1,...v6,...v6];
v1[6] = v9;
const v10 = v4.bind();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
