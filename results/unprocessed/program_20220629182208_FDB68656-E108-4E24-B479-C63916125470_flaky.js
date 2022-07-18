function main() { 
const v1 = [1000000.0,1000000.0];
const v3 = [-536870912,v1];
const v4 = [1000000.0,v3,1000000.0];
const v6 = v1.splice(-536870912,-536870912,v4,Object);
throw v3;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
