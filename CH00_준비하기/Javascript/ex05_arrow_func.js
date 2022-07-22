/*
  화살표 함수
*/

// map() 과 () = > {}

const materials = [
  'hydrogen',
  'Helium',
  'Litium',
  'Beryllim'
];

materials.map((e, idx)=>{
  console.log(e, idx);
});

let newArr = materials.map((e, idx)=>{
return e.length * 2 ;
});

console.log(newArr);

//회문 
let palindromes =[
'스위스',
'팥공밭',
'별똥별',
'음악',
'인도인',
'필리빈',
'다시합시다',
'피카추',
'여보안경안보여',
'역삼역',
];
const contents = palindromes.filter((str) =>{
  if(str===str.split('').reverse('').join('')){
    return str;
  } else if(str != str.split('').reverse('').join('')){
    return str;
  }
});
console.log(contents);

