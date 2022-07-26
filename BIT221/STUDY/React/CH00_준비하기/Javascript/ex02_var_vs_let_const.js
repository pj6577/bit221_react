/* 
[const]
constant(상수)를 뜻 '항상 같은 수'
변수인데 상수 = 변치 않는 값을 갖는 변수
- const로 선언한 변수는 값의 재할당 불가 (x)
- 반드시 선언과 동시에 값이 할당되어야
*/

const PI = 3.141592;
'반지름이 10인 원의 넓이는 ? 입니다.'
'**은 제곱'
console.log(`반지름이 10인 원의 넓이는 ${10**2*PI} 입니다.`);
//PI = 3.141;

var sn;
sn = 'K2022-13';
console.log('SN:', sn);

//const SN;
//SN = 'K2022-13';

/*
[let]
- 변수
- 다른 값이 재 할당 가능(O)
*/

/*
- var vs let
*/

var some = 104;
some = 1004;
// . . 코딩을 이어서 하고 나서 6만 5천줄이 됐음 !
var some = 104;
// 재선언이 아무렇지도 않게 됨
/*
let sum = 108;
sum = 104;
let sum = 134; */

/* 
- 호이스팅(Hoisting)
*/

var odd;
console.log(odd);
var odd = 1;

hello();
function hello() { 
  console.log("안녕~~~")
}

// let일 경우
let level = 10;
console.log(level);

/*
- 변수 범위 (Scope) : 프로그램 내에서 변수의 접근 수준
- var: 함수형 변수 (function-scope)
- let: 영역형 변수 (block-scope) 
*/

var value = 10;

function levelUp( ) 

