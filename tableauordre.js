//let array = [5, 2, 6, 1];
//array.sort();
//console.log(array);

let array = [5, 3, 6, 1];
let ordre = [];
while (array.length > 0) {
    let little = Math.min.apply(Math, array);
    ordre.push(little);
    array.splice(array.indexOf(little), 1);
}
console.log(ordre);
console.log(array);