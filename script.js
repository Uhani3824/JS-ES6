//Destructing
//Task 1

let obj1={
    name: 'Ahmed Ali',
    age: 21,
    email:'aliAhmed@gmail.com'
};

let {name,age,email}=obj1;

console.log("Name:"+name,"Age:"+age,"Email:"+email);

//Task 2

const obj2={
    firstName:'Hafsa',
    lastName:'Amer'
};

function getFullName({firstName,lastName}){
    return `${firstName} ${lastName}`;
}

const fullName=getFullName(obj2);

console.log("Full Name:"+fullName);

//Spread Operator
//Task 1
const arr1=[1,3,5];
const arr2=[2,4,6];

function getArray(array1,array2){
    const arr3=[...arr1,...arr2];

    return arr3;
}

const combinedArray=getArray(arr1,arr2);

console.log("Combined Array:"+combinedArray);

//Task 2
const arr=[22,40,69];

function getLargest(array){
    const element=Math.max(...array);

    return element;
}

const largestElement=getLargest(arr);

console.log("Largest number in the array:"+largestElement)

//Rest Operator
//Task 1
function getSum(...numbers){
    return numbers.reduce((num,sum)=>num+sum,0);
}

const sum = getSum(1, 2, 3, 4, 5);
console.log("Sum of numbers:"+sum);

//Task 2
function calculateAverage(...numbers){
    const sum=numbers.reduce((num,sum)=>num+sum,0);

    return (sum/numbers.length);
}

const input = prompt("Enter some numbers separated by space:");
const numbersArray = input.split(" ").map(Number);
const average = calculateAverage(...numbersArray);

console.log("Average of these numbers is:"+average);