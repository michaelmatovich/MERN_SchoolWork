const pokémon = Object.freeze([
    { "id": 1, "name": "Bulbasaur", "types": ["poison", "grass"] },
    { "id": 5, "name": "Charmeleon", "types": ["fire"] },
    { "id": 9, "name": "Blastoise", "types": ["water"] },
    { "id": 12, "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16, "name": "Pidgey", "types": ["normal", "flying"] },
    { "id": 23, "name": "Ekans", "types": ["poison"] },
    { "id": 24, "name": "Arbok", "types": ["poison"] },
    { "id": 25, "name": "Pikachu", "types": ["electric"] },
    { "id": 37, "name": "Vulpix", "types": ["fire"] },
    { "id": 52, "name": "Meowth", "types": ["normal"] },
    { "id": 63, "name": "Abra", "types": ["psychic"] },
    { "id": 67, "name": "Machamp", "types": ["fighting"] },
    { "id": 72, "name": "Tentacool", "types": ["water", "poison"] },
    { "id": 74, "name": "Geodude", "types": ["rock", "ground"] },
    { "id": 87, "name": "Dewgong", "types": ["water", "ice"] },
    { "id": 98, "name": "Krabby", "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime", "types": ["psychic"] },
    { "id": 133, "name": "Eevee", "types": ["normal"] },
    { "id": 144, "name": "Articuno", "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos", "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres", "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair", "types": ["dragon"] }
]);


//Examples
// const bListPkmn = pokémon.filter( p => p.name[0] === "B" );

// console.log(bListPkmn);

// const pkmnIds = pokémon.map( p => p.id )

// console.log(pkmnIds)

//ID Divisible by 3

// const idDivByThree = pokémon.filter( val => val.id % 3 == 0);
// console.log(idDivByThree)

//Fire Type

// const fireType = pokémon.filter( val => val.types.includes("fire"));
// console.log(fireType)

//More than one Type

// const multipleTypes = pokémon.filter( val => val.types.length > 1);
// console.log(multipleTypes);

// Just Names
// const namesOnly = pokémon.map( val => val.name );
// console.log(namesOnly)

//Names and Id greater than 99
// const namesOnly2 = pokémon.filter( val => val.id > 99).map(val => val.name);
// console.log(namesOnly2);

//Names and only poison
// const namesOnly3 = pokémon.filter(val => val.types.includes("poison") && val.types.length == 1).map(val => val.name);
// console.log(namesOnly3);

// First type where second type is flying
// const firstType = pokémon.filter(val => val.types[1] == "flying").map(val => val.types[0]);
// console.log(firstType);

// Count of normal type pokemon
// count = 0;
// const countNormal = pokémon.filter(val => val.types.includes("normal")).map(val => count++).length;
// console.log(countNormal)