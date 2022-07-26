/*
- 전개구문(spread operator)
- '...' 펼침 연산자
*/

//배열 리터럴에서 전개
const arr1 = [3, 4];
const arr2 = [7, 8, 9];
const arr3 = [1, 2, ...arr1, 5, 6, ...arr2, 10, 11];
console.log(arr3);

// 객체 리터럴에서 전개
const obj1 = {name: 'bar', age: '22'};
const obj2 = {job: 'student', gender: 'male'};

const cloneObj = {...obj1, ...obj2};
console.log(cloneObj);

// 함수 호출에서의 전개
function sum (x, y, z) {
  console.log(x + y + z);
} 

const numbers = [1, 2, 3];
sum(...numbers);



