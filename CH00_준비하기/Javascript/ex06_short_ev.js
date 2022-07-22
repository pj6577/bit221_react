/*
단축 평가
:논리연산에서 굳이 불필요한 연산을 생략하는 방법
*/

console.log(false && true);

//                                        : > 불필요한 연산
console.log(true && true && true && false && true);

//                                                    :> 불필요한 연산
console.log(false || false || false || false || true || false || false || false )