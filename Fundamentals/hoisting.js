// console.log(hello);                                   
// var hello = 'world';                                 

//Problem 1
//var hello
// console.log(hello) ----> undefined
// var hello = 'world';

//Problem 2
// var needle = 'haystack';
// test();
// function test(){
//     var needle = 'magnet';
//     console.log(needle);
// }

// var needle = 'haystack'
// function test
// var needle = 'magnet'
// test() ---> magnet

//Problem 3
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);

// var brendan = 'supercool'
//function print()
// brendan = 'only okay'
// console.log(brednan) ---> super cool

// Problem 4
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}

//var food ='chicken'
//function eat
// food = 'half-chicken'
// var food = 'gone'
//console.log(food) --- > chicken
//eat() --- > half-chicken

// Problem 5
// mean();
// console.log(food);
// var mean = function() {
//     food = "chicken";
//     console.log(food);
//     var food = "fish";
//     console.log(food);
// }
// console.log(food);

// error

//Problem 6
// console.log(genre);
// var genre = "disco";
// rewind();
// function rewind() {
//     genre = "rock";
//     console.log(genre);
//     var genre = "r&b";
//     console.log(genre);
// }
// console.log(genre);

//var genre
//function rewind
// console.log(genre) ===> undefined
//console.log(genere) ===> rock
//console.log(genre) ====> r&B
//console.log(genre) ====> disco

// Problem 7

// dojo = "san jose";
// console.log(dojo);
// learn();
// function learn() {
//     dojo = "seattle";
//     console.log(dojo);
//     var dojo = "burbank";
//     console.log(dojo);
// }
// console.log(dojo);

// dojo = san jose
//console.log(dojo) ===> san jose
//function learn
//console.log(dojo) ===> seattle, console.log(dojo) ===> burbank
//cosole.log(dojo) ====> san jose

// Problem 8

console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo.hiring = "closed for now";
    }
    return dojo;
}

//function makeDojo
//console.log(makeDojo(Chicago, 65)) ====> {name: "Chicago", students: 65, hiring: true }   ----- {name: "Berkely", students: 0, hiring: "closed for now"}




