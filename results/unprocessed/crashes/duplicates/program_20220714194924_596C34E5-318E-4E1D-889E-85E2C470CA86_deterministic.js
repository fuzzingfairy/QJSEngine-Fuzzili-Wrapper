function main() { 
const v1 = [536870912,536870912,536870912];
v1[6] = v1;
const v3 = [236677.14501241036,236677.14501241036,236677.14501241036];
v3.length = v1;
}
main();
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
