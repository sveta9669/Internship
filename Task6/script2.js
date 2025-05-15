// --------------------------------------------------------------------------------------------

/* 1. Create a function called reduce which accepts an array and all the usual parameters and returns the accumulated result.
    reduce([5, 9, 10], function(acc, val, i) {   // should return 24
        return acc + val;
    }, 0); */

// function reduceCopy(array, func, initialValue) {
//     let acc, i;
//     if (initialValue) {
//         acc = initialValue
//         i = 0;
//     } else {
//         acc = array[0]
//         i = 1;
//     }
//     for (i; i < array.length; i++) {
//         acc = func(acc, array[i], i)
//     }
//     return acc;
// }

// console.log(reduceCopy([5, 9, 10], function (acc, val, i) {
//     return acc + val;
// }, 0)); 

// --------------------------------------------------------------------------------------------

/*  2. Create a function called transform which takes an array of objects of this form:

    [
       {fn: "Joe", ln: "Mikaelyan", ph: "039 323 233", gender: "male" },
       {fn: "Mike", ln: "Hovsepyan", ph: "039 323 233", gender: "male" },
       {fn: "Jane", ln: "Karapetyan", ph: "039 323 233", gender: "female" },
       {fn: "Jill", ln: "Isahakyan", ph: "039 323 233", gender: "female" }
    ]
 
The function should filter the list down to only those whose gender value is “female” and return an array with those objects transformed into the following form:

    [
       {firstName: "Jane", lastName: "Karapetyan", phone: "039 323 233", gender: "female" },
       {firstName: "Jill", lastName: "Isahakyan", phone: "039 323 233", gender: "female" }
    ]

 Example:

     transform([
         {fn: "Kate", ln: "Karapetyan", ph: "039 323 233", gender: "female" },
         {fn: "Joe", ln: "Mikaelyan", ph: "039 323 233", gender: "male" },
         {fn: "Mike", ln: "Hovsepyan", ph: "039 323 233", gender: "male" },
         {fn: "Jill", ln: "Isahakyan", ph: "039 323 233", gender: "female" }
     ]);

     // should return:
     // [
     //    {firstName: "Kate", lastName: "Karapetyan", phone: "039 323 233", gender: "female" },
     //    {firstName: "Jill", lastName: "Isahakyan", phone: "039 323 233", gender: "female" }
     // ]
*/

// function transform(arr) {
//     const newArr = arr.filter(el => el.gender == 'female')
//     for (const element of newArr) {
//         for (const key in element) {
//             if (key == 'fn') {
//                 element.firstName = element[key]
//                 delete element[key]
//             } else if (key == 'ln') {
//                 element.lastName = element[key]
//                 delete element[key]
//             }else if (key == 'ph') {
//                 element.phone = element[key]
//                 delete element[key]
//             }
//         }
//     }
//     console.log(newArr);

// }

// transform([
//     { fn: "Kate", ln: "Karapetyan", ph: "039 323 233", gender: "female" },
//     { fn: "Joe", ln: "Mikaelyan", ph: "039 323 233", gender: "male" },
//     { fn: "Mike", ln: "Hovsepyan", ph: "039 323 233", gender: "male" },
//     { fn: "Jill", ln: "Isahakyan", ph: "039 323 233", gender: "female" }
// ]);



/* 3. Create a function called getAvgAgeByColor that takes an array of objects about people and a hair color.  The function should return the average age of everyone in the array with the given hair color.

Example:

    getAvgAgeByColor([
        {name: "Joe", age: 13, hairColor: "red"}, 
        {name: "Mike", age: 10, hairColor: "brown"}, 
        {name: "Jane", age: 4, hairColor: "red"}, 
        {name: "Susan", age: 30, hairColor: "brown"}
    ], "brown"); 
    // should return 20, the average age of everyone who’s hair color is brown */

// function getAvgAgeByColor(arr, color) {
//     const newArr = arr.filter(el => el.hairColor == color)
//     const avgAge = newArr.reduce((acc, el) => acc + el.age, 0) / newArr.length
//     console.log(avgAge)
// }

// getAvgAgeByColor([
//     { name: "Joe", age: 13, hairColor: "red" },
//     { name: "Mike", age: 10, hairColor: "brown" },
//     { name: "Jane", age: 4, hairColor: "red" },
//     { name: "Susan", age: 30, hairColor: "brown" }
// ], "brown"); 


/* 4. Create a function called getPersonWithMostFriendsByName that returns the name of the person who has the most number of friends with the given name.

Example:

    getPersonWithMostFriendsByName([
     {
      name: "Joe", 
      friends: [
    {name: "Susan", age: 12}, 
    {name: "Jane", age: 43}, 
    {name: "Susan", age: 33}
       ]
        }, 
     {
      name: "Liz", 
      friends: [
    {name: "Mila", age: 12}, 
    {name: "Susan", age: 43}, 
    {name: "Jane", age: 33}
       ]
        },
    {
      name: "Mike", 
      friends: [
    {name: "Susan", age: 12}, 
    {name: "Susan", age: 43}, 
    {name: "Susan", age: 33}
       ]
        }
    ], "Susan"); // should return “Mike”, since he has most number of friends named Susan */


// function getPersonWithMostFriendsByName(arr, friendName){

// }
//     getPersonWithMostFriendsByName([
//         {
//          name: "Joe", 
//          friends: [
//        {name: "Susan", age: 12}, 
//        {name: "Jane", age: 43}, 
//        {name: "Susan", age: 33}
//           ]
//            }, 
//         {
//          name: "Liz", 
//          friends: [
//        {name: "Mila", age: 12}, 
//        {name: "Susan", age: 43}, 
//        {name: "Jane", age: 33}
//           ]
//            },
//        {
//          name: "Mike", 
//          friends: [
//        {name: "Susan", age: 12}, 
//        {name: "Susan", age: 43}, 
//        {name: "Susan", age: 33}
//           ]
//            }
//        ], "Susan");


/* 5. Write a function called toNumber which takes a binary string and returns the numeric value that it represents.  Read binary numbers from right to left.  If you don’t know how binary numbers work, ask google :)

 Example:

     toNumber(“101”);  // should return 5
     toNumber(“111”);  // should return 7
     toNumber("1011") // should return 11 */


function toNumber(str) {
    console.log(str.split(''))
}


toNumber("101");
toNumber("111");
toNumber("1011");