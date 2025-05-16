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

// --------------------------------------------------------------------------------------------

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

// --------------------------------------------------------------------------------------------

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

// --------------------------------------------------------------------------------------------

/* 5. Write a function called toNumber which takes a binary string and returns the numeric value that it represents.  Read binary numbers from right to left.  If you don’t know how binary numbers work, ask google :)

 Example:

     toNumber(“101”);  // should return 5
     toNumber(“111”);  // should return 7
     toNumber("1011") // should return 11 */


// function toNumber(str) {
//     const arr = str.split('').reverse()
//     let num = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] == 1) {
//             num += Math.pow(2, i)
//         }
//     }
//     return num;
// }


// console.log(toNumber("101"));
// console.log(toNumber("111"));
// console.log(toNumber("1011"));


// --------------------------------------------------------------------------------------------

/* 6. Create a function called magic which accepts an object and returns a new object where the keys have become the values and the values have become the keys.

Example:

    magic({
      firstName: "Michael",
      lastName: "Jackson"
    });

    // should return:
    // {
    //    Michael: "firstName",
    //    Jackson: "lastName"
    // } */


// function magic(obj) {
//     for (const key in obj) {
//         obj[obj[key]] = key;
//         delete obj[key]
//     }
//     return obj
// }

// console.log(magic({
//     firstName: "Michael",
//     lastName: "Jackson"
// }));

// --------------------------------------------------------------------------------------------

/*7. Create a function, called diamond, that makes a string that looks like a diamond where the height of the diamond is of the given odd number.  The given number is always a positive, whole, odd number.

Hint: remember that "\n" causes a new line in the rendering

Example: 

    function diamond(height) {
        // ... your logic goes here ...
    }

    alert(diamond(5)); // should show the following

    //   *
    //  ***
    // *****
    //  ***
    //   *                 */

    //    *
    //   ***
    //  *****
    // *******
    //  *****
    //   ***
    //    *    


    function diamond(height) {
        const space = " ";
        const symbol = "*";
        let diamond = ''
        let spaceCount = height/2;
        let symbolCount = 1;

        for(let k =0; k<height/2; k++){
            for(let j = 1; j<height; j+=2){
            for(let i = height/2; i > 0; i--){
                diamond += space
            }
            diamond+=symbol
        }
        diamond+="\n"
        }

        
        return diamond
    }

alert(diamond(7));
