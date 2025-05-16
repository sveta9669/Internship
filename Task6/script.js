// --------------------------------------------------------------------------------------------

/* 1. Write a function isAdult(age) that returns "Adult" if age is 18 or older, otherwise returns "Minor". */

// function isAdult(age) {
//   return age >= 18 ? "Adult" : "Minor";
// }

// const isAdult1 = (age) => age >= 18 ? "Adult" : "Minor";
// console.log(isAdult(30))
// console.log(isAdult1(14))

// --------------------------------------------------------------------------------------------

/* 2. Write a program that prints all even numbers from 1 to 20 using a for loop. */

// for (let i = 2; i <= 20; i += 2) {
//     console.log(i)
// }

// --------------------------------------------------------------------------------------------

/* 3. Write a function calculateArea(shape, a, b,) where:
>     shape can be "rectangle" or "triangle"
>     a and b are the required dimensions
>     Return the correct area based on the shape. Use conditionals to determine the logic. */

// function calculateArea(shape, a, b, c) {
//     shape = shape.toLowerCase();
//     if (shape == 'rectangle') {
//         if (typeof a === 'number' && typeof b === 'number') {
//             return a * b;
//         } else {
//             return "Rectangle needs 2 numeric arguments"
//         }
//     } else if (shape == 'triangle') {
//         if ([a, b, c].every(val => typeof val === 'number')) {
//             let p = (a + b + c) / 2
//             return Math.sqrt(p * (p - a) * (p - b) * (p - c))
//         } else {
//             return "Triangle needs 3 numeric arguments"
//         }
//     } else {
//         return "Shape is wrong"
//     }
// }
// console.log(calculateArea('rectangle', 4))
// console.log(calculateArea('rectangle', 4, 5))
// console.log(calculateArea('triangle', 4, 5))
// console.log(calculateArea('triangle', 4, 5, 3))
// console.log(calculateArea('square', 4))

// --------------------------------------------------------------------------------------------

/* 4. Create an array of 5 numbers.
    > Use .map() to square each number
    > Use .filter() to return only numbers greater than 10
    > Log both results. */

// const arr = [4, 3, 10, 2, 8]
// const newArr1 = arr.map(el => el ** 2)
// const newArr2 = newArr1.filter(el => el > 10)
// console.log(newArr1)
// console.log(newArr2)

// --------------------------------------------------------------------------------------------

/* 5. Create an object person with properties: name, age, email.
    > Add a method greet() that returns "Hello, my name is <name>"
    > Use both dot and bracket notation to read and update properties. */

// const person = {
//     name: 'Alen',
//     age: 21,
//     email: 'alen21@gmail.com'
// }
// person.greet = function () {
//     return `Hello, my name is ${this.name}` 
// }

// console.log(person.greet())
// console.log(person['greet']())

// --------------------------------------------------------------------------------------------

/* 6. Write a function safeDivide(a, b) that:
    > Returns the result of a / b
    > Throws an error if b is 0
    > Use try/catch to call this function and handle the error gracefully */

// function safeDivide(a, b) {
    // if (typeof a !== 'number' || typeof b !== 'number') {
    //     throw new Error('Both arguments must be numbers');
    // }
//     if (b == 0) {
//         throw new Error('B cannot be 0')
//     }
//     return a / b
// }

// try {
//     safeDivide(5, '0')
// } catch (error) {
//     console.log(error)
// }

// --------------------------------------------------------------------------------------------

/* 7. Given this object: const user = { name: "Alice", age: 25, country: "USA" };
    > Use object destructuring to extract the values
    > Use template literals to return: "Alice is 25 years old and lives in USA." */

// const user = { name: "Alice", age: 25, country: "USA" }
// const { name, age, country } = user
// console.log(`${name} is ${age} years old and lives in ${country}.`)

// --------------------------------------------------------------------------------------------

/*  8. Write a function sumAll(...numbers) that:
    > Takes any number of arguments
    > Returns the sum of all numbers
    > Use arrow function and rest operator. */

// const sumAll = (...numbers) => numbers.reduce((acc, el) => acc + el)
// console.log(sumAll(1, 2, 3, 4, 5))

// --------------------------------------------------------------------------------------------

/* 9. Write a function analyzeUsers(users) where users is an array of objects like:
  [
    { name: "John", age: 17 },
    { name: "Jane", age: 22 }
  ]
    > Return a new array that:
    > Filters adults (18+)
    > Maps to strings like: "Jane is 22 years old"
    > Handles errors if input is not an array (use try/catch) */

// const users = [
//     { name: "John", age: 17 },
//     { name: "Jane", age: 28 },
//     { name: "Jack", age: 14 },
//     { name: "Isac", age: 53 }
// ]
// function analyzeUsers(users) {
//     try {
//         const adultUsers = users.filter(el => el.age > 18)
//         console.log('Adult user', adultUsers)
//         adultUsers.map(el => console.log(`${el.name} is ${el.age} years old`))
//     } catch {
//         console.log('Input is not array of users')
//     }
// }
// analyzeUsers(users)

// --------------------------------------------------------------------------------------------
