/* (자바의 람다같은)
- 화살표 함수 
*/

// 아래 엄청 중요해
// map()과 ()=>{}

const matarials = [
  'Hydrogen',
  'Helium',
  'Lithium',
  'Beryllium'
];
// . map(값, 인덱스) 앞에는 값, 뒤에는 인덱스 번호
let newArr = matarials.map((apple, idx) => {
  return apple.length * 2;
});

// 배열이 리턴된다.
console.log(newArr);
// 맵은 배열 객체와 관련있다.


// 회문
let palindromes = [
  '스위스',
  '팥콩밭',
  '별똥별',
  '음악',
  '인도인',
  '필리핀',
  '다시합시다',
  '피카츄',
  '여보안경안보여',
  '역삼역'
];

// 필터 
const contents = palindromes.filter((str) => {

  if (str === str.split('').reverse('').join('')) {
    return str;
  }

});

console.log(contents);