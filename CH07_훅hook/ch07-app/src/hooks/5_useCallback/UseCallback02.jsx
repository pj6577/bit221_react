import React from 'react';
import { useCallback } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const UseCallback02 = () => {
  const [number, setNumber] = useState(0);

  // const someFunction = () => {
  //   console.log(`someFunc.number : ${number}`);
  // }

  const someFunction = useCallback(()=>{
    console.log(`someFunc.number : ${number}`);
  },[number]);

  useEffect(() => {
    console.log(`someFunc이 변경되었습니다`)
  }, [ someFunction ]);


  return (
    <div className='container'>
      <input className='form-control'
        type={'number'}
        value={number}
        onChange={(e) => { setNumber(e.target.value) }}
      />
      <button className='btn btn-info'
        onClick={someFunction}
      >call someFunc</button>
    </div>
  );
};

export default UseCallback02;