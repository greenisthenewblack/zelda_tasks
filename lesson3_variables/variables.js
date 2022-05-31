console.log("running variables code /////////////////////");
//variable types

//strings
let firstName = "Chris";
console.log(firstName);

//numbers
let qty = 10;
console.log(qty);

//booleans
let likesSeaFood = false;
console.log(likesSeaFood);

//objects
let animal = {
	name: "dog",
	isMammel: true,
	numberOfLegs: 4,
	similarTo: ["wolf", "jackal"],
};
console.log(animal);
console.log(animal.name);
console.log(animal.similarTo[1]);

//arrays

//array of strings
let foodTypes = ["pizza", "seafood", "pasta"];
console.log(foodTypes);
console.log(foodTypes[1]);

//array of numbers
let numbers = [1, 2, 3];
console.log(numbers);

//array of objects
let animals = [
	{
		name: "dog",
		isMammel: true,
		numberOfLegs: 4,
		similarTo: ["wolf", "jackal"],
	},
	{
		name: "snake",
		isMammel: false,
		numberOfLegs: 0,
		similarTo: ["lizzard"],
	},
];
console.log(animals[0].name);
