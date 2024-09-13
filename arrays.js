
// let arr = [1,2,3,4,5];

// console.log(arr[1]);

// let arr = [1,2,3,4,5];
// let arr1 = [22,33,44,55,66];
// let arr2 = ["Bilal","Khan"];
// let arr3 = [12,"Bilal",14,15,[1,2,3,4]];

// console.log(arr);
// console.log(arr1);
// console.log(arr2);
// console.log(arr3);

// let arr = [9,10];


// arr[2] = [13];
// arr[3] = [14];
// arr[4] = [15];

// console.log(arr);

// **************************

// ARRAY METHODS 

// let arr = [1,2,3,4,5,6,7,8];

// console.log(arr);

// --------------------------------
// toc alculate array size 

// let arr = [1,2,3,4,5];

// console.log(arr.length);

// ------------------------------------

// converts array into string without cooma 

// let fruits = ["banana","orange","apple","peach"];


// console.log(fruits.toString());

// --------------------------------------------------

// join() it joins the array element 
// let arr = ["bilal","ali","sheryar","nabeel","omar"];

// console.log(arr.join("-"));

// -------------------------------------------------------

// pop() it deletes the last element of array 
// let arr = ["bilal","ali","sheryar","khurram","nabeel"];

// arr=arr.pop();

// console.log(arr);

// -------------------------------------------------------------

// shift() removes first element of an array || 
// unshift() adds the first removable value of an array

// let arr = [1,2,3,4,5];

//  arr.unshift();


// console.log(arr);

// --------------------------------------------

// let arr = [1,2,3,4,5];

// arr.unshift(6);

// console.log(arr);

// let parents = ["nasir khan","Saeeda nasir"];

// console.log("my parents:"+" "+parents);
// let sister = ["Zabat"];

// console.log("my sister:"+" "+sister);

// let family = parents.concat(sister);

// console.log("my complete family:"+" "+family);

// ---------------------------------------------------

// splice() use to revalue an array insert new items in anarray to replace the selected

// let fruits = ["banana","mango","orange","lemon","peach"];

// fruits.splice(2,4,"pineapple","kiwi");

// console.log(fruits);

// ----------------------------------------------------------------------------

// slice() method only insert array values \

// let fruits = ["Banana","kiwi","orange","berry","mango"];

// fruits.slice(2);

// console.log(fruits);

// ---------------------------------

// Arrays Methods Practice

// let arr = ['bilal',4,'sheery','khurram','bilal'];

// arr.push(6); it insert element in the last index

// arr.unshift(0); it inserts element in the first index 

// arr.pop(5); it deletes the element of last index 

// arr.shift(); it deletes the element of first index 

// arr.indexOf('bilal');


// console.log(arr.indexOf('bilal')); it gives the firt index of present elemnt 

// console.log(arr.lastIndexOf('bilal')); it gives the last index of present element 

// console.log(arr.includes('sheery',3)); it shows the element is present in array or not 

// Find method in array 

// let arr = [

//     {
//         name: 'bilal khan',
//         batch: 12,
//         sem: 'fifth'
//     },

//     {
//         name: 'ali',
//         batch: 9981,
//         sem: "eigth"
//     },

//     {
//         name: 'sheryar',
//         batch: 8971,
//         sem: "first"
//     }
// ]

// console.log(arr.find(function(element){

//     return element.batch === 12;
// }))

// let arr = [

//     {
//         name: 'bilal khan',
//         sec: 'A',
//         sem: "8th"
//     },

   
// ];

// console.log(arr.find(element => element.sec === 'A'));

// CONCAT METHOD 

// let names1 = ['bilal','shaheer','ali','daniyal'];
// let names2 = ['danish','khurram','jhanzaib','taimoor'];
// let names3 = names1.concat(names2);
// // console.log(names1.concat('aurangzeb'));

// // SLICE METHOD IN ARRAY 

// console.log(names3.slice(2,5));

// USING FOR LOOPS IN ARRAY 

// let names = ['bilal','ali','daniyal','sheryar','khurram'];

// for (i=0; i<names.length; i++){

//     console.log(names[i]);
// }

// let names1 = ['bilal','sheryar','ali','jhanzaib'];
// let names2 = ['daniyal','sohail','yousuf','qamar'];
// let names3 = names1.concat(names2);

// for(i=0; i<names3.length; i++){

//     console.log(names3[i]);
// }

// let names1 = ['bilal','yousuf','sohail','qamar'];
// let names2 = ['ali','sheryar','younas','jhanzaib'];
// let names3 = [...names1,...names2];

// for(i=0; i<names3.length; i++){

//     console.log(names3[i]);
// }

// FOR EACH ARRAYS 

// let names = ['bilal','sheryar','karim','raheem','raheel'];

// names.forEach(function(name,index){

//     console.log(name);
// })

// JOIN METHOD 

// let names = ['B','i','l','a','l'];

// // console.log(names.join('-'));

// let ID = names.join('-');

// console.log(ID.split('-'))

// console.log(names.split('-'));

let cities = [

    {
        name:'karachi', population: 50000000

    },

    {
        name: 'lahore', population: 30000000
    },

    {
        name:'islamabad', population: 25000000
    }
];

// console.log(cities.filter(city =>{

//     return city.population >25000000;
// }))

// MAP METHOD 

console.log(cities.map((ct) => {

 
}));



