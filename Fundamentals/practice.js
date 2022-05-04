// const groceryList = Object.freeze([
//     { "item": "carrots",           "haveIngredient": false },
//     { "item": "onions",            "haveIngredient": true  },
//     { "item": "celery",            "haveIngredient": false },
//     { "item": "cremini mushrooms", "haveIngredient": false },
//     { "item": "butter",            "haveIngredient": true  }
// ]);


// const needThyme = groceryList.concat( [ {"item": "thyme", "haveIngredient": false } ] );

// const gotTheThyme = [ ...needThyme.slice(0, 5), { ...needThyme[5], "haveIngredient": true } ];

// const items = Object.freeze(["carrots", "onions", "celery", "mushrooms", "butter", "thyme"]);

// sortedItems = [...items].sort();

// const numbers = [10, 5, 3, 12, 22, -5, ,13, 22, -4, 8];

// this will return [10, 12, 22, 3, 5, 8 ]

//SORTS
// console.log(numbers.sort((a,b) => a - b));
// Sorting callback function

// sorting lists of arbitrary values
var someItems = ["Feb", "Jan", "Apr", "Dec", "Oct"];

// Index Of
// console.log(someItems.indexOf("Oct"));

function sortMonths(a, b){
var correctMonthsOrder = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

return correctMonthsOrder.indexOf(a) - correctMonthsOrder.indexOf(b);
}

// Sorting objects by an attribute
// const sortedGroceries = [...groceryList].sort( (a, b) => a.item - b.item ? 1 : -1);

//MAP

// const groceries = ["pearl onions", "cremini mushrooms", "thyme"];
// const groceryList = groceries.map( item => `<li>${item}</li>` );

// const values = [1, 2, 3, 4, 5];
// const cubes = values.map( val => val**3 );

// console.log(groceryList)
// console.log(cubes)

// const names = ["Bob", "Chris", "Robert", "Boo"]
// const names2 = names.map( name => `Hi my name is ${name}.`)

// console.log(names2)

// FILTER and chains w/ map

const values = [1, 2, 3, 4, 5];
const evens = values.filter( val => val % 2 == 0 ).map( val => val **3);

// console.log(evens)

const groceries = ["pearl onions", "cremini mushrooms", "thyme"];
const oFoods = groceries.filter( item => item.includes("o") );

// console.log(oFoods)

//REDUCE
const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue
);

console.log(sumWithInitial);
// expected output: 10











