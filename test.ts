const characterName: string = "Yoshi";

console.log(characterName);

const greet = (name: string) => {
	console.log(`Hello, ${name}`);
};

greet("mario");
greet(characterName);
