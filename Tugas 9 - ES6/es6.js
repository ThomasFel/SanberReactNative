//SOAL 1
console.log('--SOAL 1--');

const golden = () => {
    console.log("this is golden!!");
}
 
golden();

//SOAL 2
console.log('\n--SOAL 2--');

const newFunction = (firstName, lastName) => {
    return {
        firstName,
        lastName,
        fullName() {
            console.log(`${firstName} ${lastName}`);
        }
    }
}

newFunction("William", "Imoh").fullName();

//SOAL 3
console.log('\n--SOAL 3--');

const newObject = {
    firstName: "Harry",
    lastName: "Potter Holt",
    destination: "Hogwarts React Conf",
    occupation: "Deve-wizard Avocado",
    spell: "Vimulus Renderus!!!"
}

const {
    firstName,
    lastName,
    destination,
    occupation,
    spell
} = newObject;

console.log(firstName, lastName, destination, occupation, spell);

//SOAL 4
console.log('\n--SOAL 4--');

const west = ["Will", "Chris", "Sam", "Holly"];
const east = ["Gill", "Brian", "Noel", "Maggie"];
const combined = [...west, ...east];

console.log(combined);

//SOAL 5
console.log('\n--SOAL 5--');

const planet = "earth"
const view = "glass"
var before = `Lorem ${view} dolor sit amet, consectetur adipiscing elit, ${planet} do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.`

console.log(before);