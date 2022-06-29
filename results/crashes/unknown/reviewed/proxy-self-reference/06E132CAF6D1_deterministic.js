function main() { 
const v2 = [3769255543,3769255543,3769255543,3769255543];
let {"constructor":v3,"length":v4,"toString":v5,} = v2;
const v9 = {"call":v5,"defineProperty":v5,"isExtensible":v5};
// take a target object (new blank object) and create v9 which acts like the blank object with the additional defined functions
const v11 = new Proxy(Object,v9);
do {
    // set the handler of the proxy's __proto__ equal to the proxy
    v9.__proto__ = v11;
} while (0 < 4);
}
main();
// NOTE: this crashes bc resource exhaustion, see while loop
// CRASH INFO
// ==========
// TERMSIG: 11
// STDERR:
