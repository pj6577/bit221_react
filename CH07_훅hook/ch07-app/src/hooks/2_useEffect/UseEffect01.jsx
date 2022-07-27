// import React from 'react';
// import { useEffect } from 'react';
// import { useState } from 'react';
// //클래스 컴포넌트 생명주기 함수
// /* 
//   useEffect (콜백함수, 의존성배열[, , , , ]);
//   useEffect (()=> {}, []);
// */

// const UseEffect01 = () => {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     if (count === 0) kiwis = [];
//     kiwis.push('🍕');
//     document.title = '🥖' + count + 'update';
//   }, []
//   );
//   return (
//     <div>
//       <span>{count}</span>
//       <p className='h3'>you click {count}</p>

//       <button
//         onClick={() => {
//           setCount(count + 1);
//         }}
//       >click</button>

//     </div>
//   );
// };

// export default UseEffect01;