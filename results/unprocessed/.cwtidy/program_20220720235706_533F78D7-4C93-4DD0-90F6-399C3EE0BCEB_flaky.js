function main() { 
const v1 = [-671193.046877851,-671193.046877851,-671193.046877851,-671193.046877851,-671193.046877851];
const v3 = [-1024,-1024];
const v4 = [v1,...v1,...v3,-1024,-1024,-1024,v1,...v1,v1,-1024];
v1[0] = v4;
const v6 = Object();
const v7 = v4();
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR: