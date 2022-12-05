// this my first javascript code
console.log('Hello world. We get it done');
// variables
let name = 'Thomas'
console.log(name);

// constants in js. the firstname wont change in future updates.
const firstName = 'Mabele';
console.log(firstName);

//primitive types.
// objects 
let person = {
    age: 10,
    secondName: 'Mwaura'
};
person.age=12;

// we can use bracket notation or dot notation to access or change a value
person['secondName']='Isaac'
console.log(person)


//arrays
let selectedColors = ['red','green','yellow'];
selectedColors[3]=3; //to add an object in the array using index.
console.log(selectedColors)

// functions
function greet(thirdName,age)
{console.log('My '+ thirdName + ' is John and my age is ' + age )}
greet('Mshindi',45);

function square(number)
{
    return number*number
};
result=square(4);//initializing a result to a variable result.
console.log(result)