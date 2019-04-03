
// -  Create an array variable named `animals`
//    with the following content: `["koal", "pand", "zebr"]`
// -  Add all elements an `"a"` at the end

let animals: string[] = ['koal', 'pand', 'zebr'];

animals = animals.map(function(elements) {
    return (elements += 'a')
});

console.log(animals);
