console.log("hello world");
var a = 1, b=2, d="Sting"
console.log(a, b, d);

console.log( typeof(a), typeof(b), typeof(d));
console.log("값은 %d입니다", a, "타입은 ",typeof(a), "입니다");


//ES6

var json = {id : 'bitcamp'};

console.log('Hell test ' + json.id  + ' good');
console.log(`Hell test   ${json.id}   good`);


/* [const]
  constant(상수)를 뜻
    '항상 같은 수'
  변수(變數)인데 상수(常數)
  변치 않는 값을 갖는 변수
  - const로 선언한 변수는 값의 재할당 불가(X)
  - 반드시 선언과 동시에 값이 할당되어야
 */  

  const PI = 3.14592;
  console.log(`반지름이 10인 원의 넓이는 ${10**2*PI} `)



