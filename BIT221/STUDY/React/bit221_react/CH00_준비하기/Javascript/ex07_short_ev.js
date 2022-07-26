/*
- 단축 평가
- 논리연산에서 굳이 불필요한 연산을 생략하는 방법
*/

// (컴퓨터) AND 연산 시 하나만 false여도 false가 나오므로 
// 굳이 다른 조건을 검사하지 않는다.
// (개발자) 맨 앞에 false가 될 확률이 높은 조건을 넣어준다.
console.log(false && true);

//                          |--- 불필요한 연산
console.log(true && true && false && true && true && true);
//                                     |--- 불필요한 연산
console.log(false || false || false || true || false || false);

