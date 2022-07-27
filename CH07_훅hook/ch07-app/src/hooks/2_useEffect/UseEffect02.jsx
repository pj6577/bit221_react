import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const UseEffect02 = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('NickName');
  const updateInput = (e) => {
    setName(e.target.value);
  }
  const updateCount = () => {
    setCount(count + 1);
  }
  //랜더링마다 매번 사이드 이펙트 실행
  useEffect(() => {
    console.log("컴포넌트 렌더링");
  })
  //마운팅&& count가 바뀔때마다 실행
  useEffect(() => {
    console.log("카운트 변경시 렌더링");
  }, [count]);
  return (
    <div className='container'>
      <p>COUNT : {count}</p>
      <button className='btn btn-succes'
        onClick={updateCount}
      >Update</button>
      <div>
        <input type='text' onChange={updateInput} />
      </div>
      <p> {name}</p>
    </div>
  );
};

export default UseEffect02;