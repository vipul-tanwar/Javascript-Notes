const alphabet = ['A','B','C','D','E'];
const numbers = ['1','2','3','4','5'];

// const [a,b] = alphabet;
// const [a, ,c] = alphabet;
const [a,,c, ...rest] = alphabet;
// console.log(a);
// console.log(c);
// console.log(rest);
const newArray = [...alphabet, ...numbers];
// console.log(newArray);

function sumAndMultiply(a, b){
    return [a+b, a*b]
}

const array = sumAndMultiply(2,3);
const [sum, multiply, division = "No division"] = sumAndMultiply(2,3)

// console.log(sum);
// console.log(multiply);
// console.log(division);

const personOne = {
    name: 'Sam',
    age: 24,
    temp: "test",
    address: {
        city: 'Somewhere',
        state: 'One of them'
    }
}

const personTwo = {
    name: 'Sally',
    age: 32,
    favoriteFood: "Watermelon",
    address: {
        city: 'Somewhere else',
        state: 'Another one of them'
    }
}

// const {name, age} = personOne;
// const {name:firstname, age, rollno: studentid="temp", favoriteFood='Rice'} = personTwo;
// console.log(firstname);
// console.log(age);
// console.log(studentid);
// console.log(favoriteFood);
// const {name: firstname , ...rests } = personTwo;
// console.log(firstname);
// console.log(rests);

const {name: firstnames , address: {state}} = personTwo

// console.log(firstnames);
// console.log(state);


//Combile two objects
const personThree = {...personOne, ...personTwo};
// console.log(personThree);

//Object destructure in function
function printUser({name, age, favoriteFood = "Pizza"}){
    console.log(`My name is ${name}.Age is ${age}. My favourite food is ${favoriteFood}`)
}
printUser(personOne);