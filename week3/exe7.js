const arr1=[1,2,3];
const newArr=[1,...arr1,4,5];
console.log(newArr);
const[first,second,...rest]=newArr;
console.log(`First: ${first}, Second: ${second}, Rest: ${rest}`);