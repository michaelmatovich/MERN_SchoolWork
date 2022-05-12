let test = "/planets/293/";

let planetId = "";

let index = test.length-2;

while(test[index] != "/")
{
    planetId += test[index];
    index--;
}

planetId = [...planetId].reverse().join("");
// planetId = reversePlanetId.reverse().join("");

// // for(let i = reversePlanetId.length-1; i > -1; i--)
// // {
// //     planetId += reversePlanetId[i];
// // }

console.log(planetId);

let string = "!onaiP"
string = [...string].reverse().join("");

console.log(string); // "Piano!"